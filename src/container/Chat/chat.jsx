import React from 'react';
import ChatSidebar from '../../components/chatSidebar/chatSidebar'
import ChatBox from '../../components/chatBox/chatBox'
import './chat.css'

const Chat = () =>
{
	return (
		<div className="chat">
			<div className="chat__inner">
				<ChatSidebar />
				<ChatBox />
			</div>
		</div>
	)
}
export default Chat;