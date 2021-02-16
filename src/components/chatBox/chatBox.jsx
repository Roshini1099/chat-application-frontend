import React, { useState } from "react";
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './chatBox.css';
import { useDispatch, useSelector } from "react-redux";
function ChatBox(props) {
	const [message, setMessage] = useState("");
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

		sendMessage();
		// if (message) {
		// 	dispatch(userActions.login());
		// }
	}

	return (
		<div className="chatbox">
			<div className="chatbox__header">
				<div className="chatbox__header__title">
					<h2>{messages.currentchat.type == "directMessage" ? messages.currentchat.userName : messages.currentchat.chatName}</h2>
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
							<h5>{value.senderId}</h5>
						</div>
						<div className="lastseen">{new Date(value.timestamp).toString()}</div>
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
					<div onClick={()=>sendMessage}>
						<SendIcon style={{ color: 'blue'}} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChatBox;
