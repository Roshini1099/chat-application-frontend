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
const MessageContent = () => {
	const messages = useSelector((state) => state.currentChat);
	const [isLoadingState, setLoadingState] = useState(false);
	const [modalOpenState, setModalOpenState] = useState(false);
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
	return (
		<div style={{ marginTop: '110px' }}>
			<Comment.Group style={{ marginLeft: '10px' }}>
				{/* {messages.currentchat.messages.map((value, index) => ( */}
				<Comment>
					<Comment.Avatar
						as="a"
						src="https://react.semantic-ui.com/images/avatar/small/steve.jpg"
					/>

					<Comment.Content>
						<Comment.Author as="a">
							{/* {value.senderName} */}User
						</Comment.Author>

						<Comment.Metadata>
							<div>
								{/* {new Date(value.timestamp)
									.toString()
									.substring(0, 21)} */}
								2days ago
							</div>
							<div>
								<Popup
									content="Delivered:8.10 AM
                                            Seen: 8.30AM"
									trigger={<Icon name="eye"></Icon>}
									// trigger={
									// 	<div>
									// 		{value.seen && <p>seen</p>}
									// 		{value.delivered && <p>delivered</p>}
									// 	</div>
									// }
								/>
							</div>
						</Comment.Metadata>
						<Comment.Text>
							{/* {value.text} */}Hey there!
						</Comment.Text>
						<Comment.Actions>
							<Comment.Action onClick={openModal}>
								<Icon name="edit" onClick={openModal}></Icon>
							</Comment.Action>
							<Comment.Action>
								<Icon name="trash alternate"></Icon>
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
		</div>
	);
};
export default MessageContent;
