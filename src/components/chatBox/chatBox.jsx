import React, { useState } from "react";
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './chatBox.css';
import { chatActions } from '../../actions';
import { useDispatch, useSelector } from "react-redux";
function ChatBox(props) {
	const [message, setMessage] = useState("");
	const [index, setIndex] = useState(0);
	const dispatch = useDispatch();
	const senderId =  useSelector((state) => state.authentication.user.user._id);
	const senderName =  useSelector((state) => state.authentication.user.user.userName);
	const messages = useSelector((state) => state.currentChat);
	if(messages === null){
		return null
	}
	const onChangeMessage = (e) => {
		const message = e.target.value;
		setMessage(message);
	  };

	  function sendMessage (e) {
		e.preventDefault();
		if (message) {
			dispatch(chatActions.message(message,senderId,messages.currentchat._id,"Create",index,senderName));
			setMessage('');
		}
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
				<div>
					<AddCircleOutlineIcon />
				</div>
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
					</div>
					</div>
					 ))}
				</div>
			</div>
			<div className="chatbox__footer">
				<div className="chatbox__footer__body">
					<div className="chatbox__footer__input">
						<input type="text" value={message} placeholder="Enter message" onChange={onChangeMessage}/>
					</div>
					<div>
						<AttachFileIcon />
					</div>
					<div onClick={sendMessage}>
						<SendIcon style={{ color: 'blue'}} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChatBox;
