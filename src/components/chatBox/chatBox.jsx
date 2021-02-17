import React, { useState } from "react";
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './chatBox.css';
import axios from '../../helpers/axios';
import { typing } from '../../helpers/socket'
import { chatActions } from '../../actions';
import { useDispatch, useSelector } from "react-redux";
import { currentChatConstants, chatConstants } from '../../actionTypes';

function ChatBox(props)
{
	const [message, setMessage] = useState("");
	const [index, setIndex] = useState(0);
	const dispatch = useDispatch();
	const senderId = useSelector((state) => state.authentication.user.user._id);
	const senderName = useSelector((state) => state.authentication.user.user.userName);
	const user = useSelector((state) => state.authentication.user.user);
	const messages = useSelector((state) => state.currentChat);
	if (messages === null) {
		return null
	}
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
			senderId,
			chatId: messages.currentchat._id,
			type: "Create",
			index,
			senderName
		};
		console.log(data);
		await axios.post('/api/message', data).then(async (response) =>
		{
			setMessage('');
			dispatch({
				type: currentChatConstants.CHAT_SUCCESS,
				payload: { data: response.data },
			});
			await currentMessage(response.data);

		}).catch((err) =>
		{
			console.log(err)
		})
	}
	function currentMessage(data)
	{
		let type = data.type;
		if (type === "directMessage") {
			let directMessage = user.directMessage
			for (var i = 0; i < directMessage.length; i++) {
				if (directMessage[i].chatId._id === data._id) {
					directMessage[i].chatId = {
						...directMessage[i].chatId,
						...data
					}
				}
			}
		}
		else {
			let channels = user.channels
			for (var i = 0; i < channels.length; i++) {
				if (channels[i].chatId._id === data._id) {
					channels[i].chatId = {
						...channels[i].chatId,
						...data
					}
				}
			}
		}
	}

	const typingHandler = () =>
	{
		let payload = { type: messages.currentchat.type, isTyping: true, recieverId: messages.currentchat.recieverId, userName: senderName, chatId: messages.currentchat._id }
		typing(payload);
	}

	return (
		<div className="chatbox">
			<div className="chatbox__header">
				<div className="chatbox__header__title">
					<h2>{messages.currentchat.chatName}</h2>

					{/* replace class online with lastseen. */}
					<div className="online"></div>
				</div>
				{/* visible only in case of channels */}
				{messages.typing && <p className="typing">{messages.typinguser} typing</p>}
			</div>
			<div className="chatbox__body">
				<div className="chatbox__body__message">
					{messages.currentchat.messages.map((value, index) => (
						<div>
							<div className="chatbox__body__message__header">
								<div className="profile"></div>
								<div className="chatbox__username">
									<h5>{value.senderName}</h5>
								</div>
								<div className="lastseen">{new Date(value.timestamp).toString().substring(0, 21)}</div>
							</div>
							<div className="chatbox__body__message__text">
								<p>{value.text}</p>
								<div className="status">
									{value.seen && <p>seen</p>}
									{value.delivered && <p>delivered</p>}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="chatbox__footer">
				<div className="chatbox__footer__body">
					<div className="chatbox__footer__input">
						<input type="text" value={message} placeholder="Enter message" onChange={onChangeMessage} onKeyPress={typingHandler} />
					</div>
					<div>
						<AttachFileIcon />
					</div>
					<div onClick={sendMessage}>
						<SendIcon style={{ color: 'blue' }} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChatBox;
