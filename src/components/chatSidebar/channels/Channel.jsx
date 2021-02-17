import React, { Component, useState } from 'react';
import './Channel.css';
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
function Channels() {
	const [isLoadingState, setLoadingState] = useState(false);
	const [modalOpenState, setModalOpenState] = useState(false);
	const [channel, setChannel] = useState('');
	const dispatch = useDispatch();
	const type = 'Channel';
	const userId = useSelector((state) => state.authentication.user.user._id);

	//Modal open function
	const openModal = () => {
		console.log('in open modal');
		setModalOpenState(true);
	};

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

	// checking form validity

	// handling submit function
	function onSubmit(e) {
		e.preventDefault();

		setLoadingState(true);
		if (channel) {
			setLoadingState(false);
			// console.log(userId);
			dispatch(chatActions.createChannel(channel, userId, 'channel'));
			closeModal();
		}
	}

	return (
		<>
			<Menu.Menu style={{ marginTop: '40px' }}>
				<Menu.Item>
					<span className="clickable" onClick={openModal}>
						<Icon name="add" onClick={openModal} /> ADD
					</span>
				</Menu.Item>
			</Menu.Menu>

			<Modal open={modalOpenState} onClose={closeModal}>
				<Modal.Header>Add Channel</Modal.Header>
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
		</>
	);
}

export default Channels;
