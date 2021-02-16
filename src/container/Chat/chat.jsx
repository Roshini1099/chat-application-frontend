import React, { useEffect } from 'react';
import ChatSidebar from '../../components/chatSidebar/chatSidebar'
import ChatBox from '../../components/chatBox/chatBox'
import { initialise } from '../../helpers/socket'
import './chat.css'

const Chat = () =>
{
	useEffect(() =>
	{
		console.log('inside use effect chat')
		initialise();
	}, [])
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