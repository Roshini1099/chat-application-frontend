import React, { Component, useState } from 'react';
import { Comment, Popup } from 'semantic-ui-react';

import { useDispatch, useSelector } from 'react-redux';
import {
	Menu,
	Icon,
	Modal,
	Button,
	Form,
	Segment,
	Input,
} from 'semantic-ui-react';
import { currentchatactions } from '../../../actions';
const MessageContent = ({ data, userId, index}) =>
{
	const messages = useSelector((state) => state.currentChat);
	const senderId = useSelector((state) => state.authentication.user.user._id);
	const senderName = useSelector(
		(state) => state.authentication.user.user.userName
	);
	const user = useSelector((state) => state.authentication.user);
	const [isLoadingState, setLoadingState] = useState(false);
	const [modalOpenState, setModalOpenState] = useState(false);
	const [msg,setMsg] = useState(data.text);

	// const [modalOpen, setModalOpen] = useState(false);
	const [channel, setChannel] = useState('');
	const dispatch = useDispatch();
	function onSubmit(e) {
		e.preventDefault();

		setLoadingState(true);
		if (channel) {
			setLoadingState(false);
			// console.log(userId);
			// dispatch(
			// 	chatActions.createChannel(channel, userId, 'channel', user)
			// );
			setChannel('');
			closeModal();
		}
	}
	const openModal = () => {
		console.log('in open modal');
		setModalOpenState(true);
	};
	// const openModalJoin = () => {
	// 	console.log('in open modal');
	// 	setModalOpen(true);
	// };
	// const closeModalJoin = () => {
	// 	console.log('in open modal');
	// 	setModalOpen(false);
	// };

	//Modal close function
	const closeModal = () => {
		setModalOpenState(false);
	};

	//updating the channel state

	const handleChange = (e) => {
		const message = e.target.value;
		setChannel(message);
		console.log(channel);
	};
	async function deleteMsg()
	{
		const data = {
			text: msg,
			recieverId: messages.currentchat.recieverId,
			recieverName: messages.currentchat.recieverName,
			senderId,
			chatId: messages.currentchat._id,
			type: 'Delete',
			index,
			senderName,
		};
		console.log('chatbox', messages);
		dispatch(currentchatactions.addChat(data, user));
	}
	return (
		<div style={{ marginTop: '30px' }}>
			{data.delete ?
			null:
			<Comment.Group style={{ marginLeft: '10px' }}>
				{/* {messages.currentchat.messages.map((value, index) => ( */}
				<Comment>
					<Comment.Avatar
						as="a"
						src="https://react.semantic-ui.com/images/avatar/small/steve.jpg"
					/>

					<Comment.Content>
						<Comment.Author as="a">
							{data.senderName}
						</Comment.Author>

						<Comment.Metadata>
							<div>
								{/* {new Date(value.timestamp)
									.toString()
									.substring(0, 21)} */}
								{new Date(data.timestamp)
									.toString()
									.substring(0, 21)}
							</div>

							<div>
								{data.delivered && data.senderId === userId && <Icon name="eye" style={data.seen ? { 'color': '#00BFFF' } : { 'color': '#696969' }}></Icon>}
							</div>
						</Comment.Metadata>
						<Comment.Text>
							{data.text}
						</Comment.Text>
						<Comment.Actions>
							<Comment.Action onClick={openModal}>
								<Icon name="edit" onClick={openModal}></Icon>
							</Comment.Action>
							<Comment.Action onClick={deleteMsg}>
								<Icon name="trash alternate" onClick={deleteMsg}></Icon>
							</Comment.Action>
							<Comment.Action></Comment.Action>
						</Comment.Actions>
						<Modal
				open={modalOpenState}
				onClose={closeModal}
				style={{ left: '500px', height: '250px', top: '270px' }}
			>
				<Modal.Header>Edit Message</Modal.Header>
				<Modal.Content>
					<Form onSubmit={onSubmit}>
						<Segment stacked>
							<Form.Field>
								<Input
									name="chatName"
									value={channel}
									onChange={handleChange}
									type="text"
									placeholder="Enter Channel Name"
								/>
							</Form.Field>
						</Segment>
					</Form>
				</Modal.Content>
				<Modal.Actions>
					<Button loading={isLoadingState} onClick={onSubmit}>
						<Icon name="checkmark" /> Save
					</Button>
					<Button onClick={closeModal}>
						<Icon name="remove" /> Cancel
					</Button>
				</Modal.Actions>
			</Modal>
					</Comment.Content>
				</Comment>
				{/* ))} */}
			</Comment.Group>
}
		</div>
	);
};
export default MessageContent;
