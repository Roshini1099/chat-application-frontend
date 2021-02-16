import React from 'react';
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './chatBox.css';
import { useDispatch, useSelector } from "react-redux";
function ChatBox(props) {
	const messages = useSelector((state) => state.currentChat);
	console.log(messages)
	function ts(ts)
	{
		console.log(ts)
		var d = Date(ts); 
  
		// Converting the number of millisecond  
		// in date string 
		var a = d.toString();
		return a; 
// // convert unix timestamp to milliseconds
// var ts_ms = ts * 1000;

// // initialize new Date object
// var date_ob = new Date(ts_ms);

// // hours as 2 digits (hh)
// var hours = ("0" + date_ob.getHours()).slice(-2);

// // minutes as 2 digits (mm)
// var minutes = ("0" + date_ob.getMinutes()).slice(-2);

// return hours +":" +minutes;
	}
	if(messages === null){
		return null
	}
	return (
		<div className="chatbox">
			<div className="chatbox__header">
				<div className="chatbox__header__title">
					<h2>Product</h2>
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
						<input placeholder="Enter message" />
					</div>
					<div>
						<AttachFileIcon />
					</div>
					<div>
						<SendIcon style={{ color: 'blue' }} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChatBox;
