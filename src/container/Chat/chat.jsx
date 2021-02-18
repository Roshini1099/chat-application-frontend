import React, { useEffect } from 'react';
import ChatSidebar from '../../components/chatSidebar/chatSidebar';
import { useSelector } from 'react-redux';
import ChatBox from '../../components/chatBox/chatBox';
import { initialise } from '../../helpers/socket';
import './chat.css';

const Chat = () => {
	const userId = useSelector((state) => state.authentication.user.user._id);
	useEffect(() => {
		console.log('inside use effect chat', userId);
		initialise(userId);
	}, []);
	return (
		<div className="chat">
			<div className="chat__inner">
				<ChatSidebar />
				<ChatBox />
			</div>
		</div>
	);
};
export default Chat;
