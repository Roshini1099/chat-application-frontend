import React from 'react';
// import MessageHeader from './MessageHeader';
import MessageContent from './MessageContent';
import { useDispatch, useSelector } from 'react-redux';
import { MuseumSharp } from '@material-ui/icons';

const Messages = () =>
{
	const currentMessage = useSelector(state => state.currentChat)
	console.log(currentMessage)
	return (

		<div>
			{currentMessage.currentchat.messages.map((value, key) => (
				<MessageContent key={key} data={value} />
			))}

		</div>
	);
};
export default Messages;
