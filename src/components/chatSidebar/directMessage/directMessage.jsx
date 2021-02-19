import React, { Component, useState } from 'react';
import './directMessage.css';
import { chatActions } from '../../../actions';
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
function DirectMessage() {
	const [isLoadingState, setLoadingState] = useState(false);
	const [modalOpenState, setModalOpenState] = useState(false);
	// const [modalOpen, setModalOpen] = useState(false);
	const [email, setEmail] = useState('');
	// const [joinChannel, setJoinChannel] = useState('');
	const dispatch = useDispatch();
	const user = useSelector((state) => state.authentication.user);
	console.log(user);
	const userId = useSelector((state) => state.authentication.user.user._id);

	//Modal open function
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
		setEmail(message);
		console.log(email);
	};
	// const handleChangeModal = (e) => {
	// 	const message = e.target.value;
	// 	setJoinChannel(message);
	// 	console.log(channel);
	// };

	// checking form validity

	// handling submit function
	function onSubmitChannel(e) {
		e.preventDefault();

		setLoadingState(true);
		if (email) {
			setLoadingState(false);
			// console.log(userId);
			dispatch(
                chatActions.createDirectChat(email, userId, 'directMessage', user)
				// chatActions.joinChannel(channel, userId, user)
			);
			setEmail('');
			closeModal();
		}
    }
    

	// function onSubmitModal(e) {
	// 	e.preventDefault();

	// 	setLoadingState(true);
	// 	if (joinChannel) {
	// 		setLoadingState(false);
	// 		// console.log(userId);
	// 		dispatch(
	// 			chatActions.createChannel(channel, userId, 'channel', user)
	// 		);
	// 		setChannel('');
	// 		closeModal();
	// 	}
	// }

	return (
		<>
			<Menu.Menu style={{ marginTop: '40px', marginLeft: '15px' }}>

				<Menu.Item style={{ marginTop: '20px' }}>
					<span className="clickable" onClick={openModal}>
						<Icon name="add" onClick={openModal} /> ADD DIRECT MESSAGE
					</span>
				</Menu.Item>
			</Menu.Menu>
			<Modal
				open={modalOpenState}
				onClose={closeModal}
				style={{ left: '500px', height: '250px', top: '270px' }}
			>
				<Modal.Header>Add Direct Message</Modal.Header>
				<Modal.Content>
					<Form onSubmit={onSubmitChannel}>
						<Segment stacked>
							<Form.Field>
								<Input
									name="chatName"
									value={email}
									onChange={handleChange}
									type="text"
									placeholder="Enter Email ID"
								/>
							</Form.Field>
						</Segment>
					</Form>
				</Modal.Content>
				<Modal.Actions>
				<Button loading={isLoadingState} onClick={onSubmitChannel} style={{backgroundColor:'#351936',align:'left',color:'#fff'}}>
						<Icon name="checkmark" /> Join Chat
					</Button>
					<Button onClick={closeModal}>
						<Icon name="remove" /> Cancel
					</Button>
				</Modal.Actions>
			</Modal>
		</>
	);
}

export default DirectMessage;
