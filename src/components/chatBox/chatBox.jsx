import React, { useState, useEffect } from "react";
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './chatBox.css';
import axios from '../../helpers/axios';
import { typing } from '../../helpers/socket';
import { chatActions } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { currentChatConstants, chatConstants } from '../../actionTypes';
import { currentchatactions } from '../../actions/currentchatactions';
import MessageContent from './messages/MessageContent';

function ChatBox(props)
{
	const [message, setMessage] = useState('');
	const [file, setFile] = useState(null);
	const [index, setIndex] = useState(0);
	const dispatch = useDispatch();
	const senderId = useSelector((state) => state.authentication.user.user._id);
	const senderName = useSelector(
		(state) => state.authentication.user.user.userName
	);
	const user = useSelector((state) => state.authentication.user);
	const messages = useSelector((state) => state.currentChat);

	const onChangeMessage = (e) =>
	{
		const message = e.target.value;
		setMessage(message);

	};

	const fileSelectedHandler = (e) =>
	{
		let file = e.target.files[0];
		console.log(e.target.files[0])
		let name = e.target.files[0].name;

		setMessage(name);
		setFile(file);

	}

	async function sendMessage(e)
	{
		e.preventDefault();
		const data = {
			text: message,
			recieverId: messages.currentchat.recieverId,
			recieverName: messages.currentchat.recieverName,
			senderId,
			chatId: messages.currentchat._id,
			type: 'Create',
			index,
			senderName,
			isFile: false
		};

		if (message === '') return;
		let formData = new FormData();
		if (file) {
			data.isFile = true;
		}
		formData.append('data', JSON.stringify(data));
		if (file) {
			formData.append(
				"attachment",
				file
			);
			console.log(file)
		}
		dispatch(currentchatactions.addChat(data, formData, user));
		setMessage('');
		setFile(null);
	}
	const removeFileHandler = () =>
	{
		setFile(null);
		setMessage('');
	}

	const typingHandler = () =>
	{
		let payload = {
			type: messages.currentchat.type,
			isTyping: true,
			recieverId: messages.currentchat.recieverId,
			userName: senderName,
			chatId: messages.currentchat._id,
		};
		typing(payload);
	};
	function updateScroll()
	{
		var element = document.getElementById("chatDiv");
		element.scrollTop = element.scrollHeight;
	}
	useEffect(() =>
	{
		updateScroll();
	})
	if (messages === null) {
		return null;
	}
	return (
		<div className="chatbox">
			<div className="chatbox__header">
				<div className="chatbox__header__title">
					{messages.currentchat.type === 'directMessage' ? (
						<h2>{messages.currentchat.recieverName}</h2>
					) : (
							<h2>{messages.currentchat.chatName}</h2>
						)}
					{/* replace class online with lastseen. */}
					<div className="online"></div>
				</div>
				{/* visible only in case of channels */}
				{messages.typing && (
					<p className="typing">{messages.typinguser} typing</p>
				)}
			</div>
			<div className="chatbox__body" id="chatDiv">
				{messages.currentchat.messages.map((value, key) => (
					<MessageContent key={key} data={value} userId={senderId} index={key} />
				))}
			</div>
			<div className="chatbox__footer">
				<div className="chatbox__footer__body">
					<div className="chatbox__footer__input">
						<input
							name="attachment"
							type="text"
							value={message}
							placeholder="Enter message"
							onChange={onChangeMessage}
							onKeyPress={typingHandler}
						/>
					</div>
					{file && <div className="chatbox__cancel" onClick={removeFileHandler}>
						x
						</div>}
					<div>
						<label>
							<AttachFileIcon />
							<input
								style={{ display: 'none' }}
								type={"file"}
								onChange={fileSelectedHandler}
							/>
						</label>

					</div>
					<div onClick={sendMessage}>
						<SendIcon style={{ color: 'blue' }} />
					</div>
				</div>
			</div>
		</div >
	);
}

export default ChatBox;
