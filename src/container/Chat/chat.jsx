import React, { useEffect } from 'react';
import ChatSidebar from '../../components/chatSidebar/chatSidebar';
import { useSelector } from 'react-redux';
import ChatBox from '../../components/chatBox/chatBox';
import { initialise } from '../../helpers/socket';
import { Privateroute } from '../../hoc/Logout'
import './chat.css';
import MessageContent from '../../components/chatBox/messages/MessageContent';

const Chat = () =>
{
	const userId = useSelector((state) => state.authentication.user.user._id);
	const messages = useSelector((state => state.currentChat))
	useEffect(() =>
	{
		console.log('inside use effect chat', userId)
		initialise(userId);
	}, []);
	return (
		<div className="chat">
			<div className="chat__inner">
				<ChatSidebar />
				{messages && <ChatBox />}
			</div>
		</div>
		// <div className="chat">
		// 	<div className="chat__inner">
		// 		<ChatSidebar />
		// 		<Messages />
		// 	</div>
		// </div>
	);
};
export default Privateroute(Chat);
