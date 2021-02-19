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
		};
		console.log('chatbox', messages);
		if (message === '') return;
		dispatch(currentchatactions.addChat(data, user));
		setMessage('');
	}
	// function currentMessage(data)
	// {
	// 	let type = data.type;
	// 	if (type === "directMessage") {
	// 		let directMessage = user.directMessage
	// 		for (var i = 0; i < directMessage.length; i++) {
	// 			if (directMessage[i].chatId._id === data._id) {
	// 				directMessage[i].chatId = {
	// 					...directMessage[i].chatId,
	// 					...data
	// 				}
	// 			}
	// 		}
	// 	}
	// 	else {
	// 		let channels = user.channels
	// 		for (var i = 0; i < channels.length; i++) {
	// 			if (channels[i].chatId._id === data._id) {
	// 				channels[i].chatId = {
	// 					...channels[i].chatId,
	// 					...data
	// 				}
	// 			}
	// 		}
	// 	}
	// }

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
					<MessageContent key={key} data={value} userId={senderId} />
				))}
			</div>







			<div className="chatbox__footer">
				<div className="chatbox__footer__body">
					<div className="chatbox__footer__input">
						<input
							type="text"
							value={message}
							placeholder="Enter message"
							onChange={onChangeMessage}
							onKeyPress={typingHandler}
						/>
					</div>
					<div>
						<AttachFileIcon />
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
