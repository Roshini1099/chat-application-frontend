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
	// const [modalOpen, setModalOpen] = useState(false);
	const [channel, setChannel] = useState('');
	// const [joinChannel, setJoinChannel] = useState('');
	const dispatch = useDispatch();
	const type = 'Channel';
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
		setChannel(message);
		console.log(channel);
	};
	// const handleChangeModal = (e) => {
	// 	const message = e.target.value;
	// 	setJoinChannel(message);
	// 	console.log(channel);
	// };

	// checking form validity

	// handling submit function
	function onSubmit(e) {
		e.preventDefault();

		setLoadingState(true);
		if (channel) {
			setLoadingState(false);
			// console.log(userId);
			dispatch(
				chatActions.createChannel(channel, userId, 'channel', user)
			);
			setChannel('');
			closeModal();
		}
	}
	function onSubmitChannel(e) {
		e.preventDefault();

		setLoadingState(true);
		if (channel) {
			setLoadingState(false);
			// console.log(userId);
			dispatch(
				chatActions.joinChannel(channel, userId, user)
			);
			setChannel('');
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
				<Menu.Item style={{ fontSize: '20px' }}>
					<span>
						<Icon name="exchange" /> Channels
					</span>
				</Menu.Item>

				<Menu.Item style={{ marginTop: '20px' }}>
					<span className="clickable" onClick={openModal}>
						<Icon name="add" onClick={openModal} /> ADD CHANNEL / JOIN CHANNEL
					</span>
				</Menu.Item>
			</Menu.Menu>
			{/* <Menu.Menu style={{ marginTop: '40px', marginLeft: '15px' }}>

				<Menu.Item style={{ marginTop: '10px' }}>
					<span className="clickable" onClick={openModalJoin}>
						<Icon name="add" onClick={openModalJoin} /> JOIN CHANNEL
					</span>
				</Menu.Item>
			</Menu.Menu> */}
			{/* <Modal
				open={modalOpen}
				onClose={closeModalJoin}
				style={{ left: '500px', height: '250px', top: '270px' }}
			>
				<Modal.Header>Join Channel</Modal.Header>
				<Modal.Content>
					<Form onSubmit={onSubmitModal}>
						<Segment stacked>
							<Form.Field>
								<Input
									name="chatName"
									value={joinChannel}
									onChange={handleChangeModal}
									type="text"
									placeholder="Enter Channel Name"
								/>
							</Form.Field>
						</Segment>
					</Form>
				</Modal.Content>
				<Modal.Actions>
					<Button loading={isLoadingState} onClick={onSubmitModal}>
						<Icon name="checkmark" /> Save
					</Button>
					<Button onClick={closeModalJoin}>
						<Icon name="remove" /> Cancel
					</Button>
				</Modal.Actions>
			</Modal> */}
			<Modal
				open={modalOpenState}
				onClose={closeModal}
				style={{ left: '500px', height: '250px', top: '270px' }}
			>
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
				<Button loading={isLoadingState} onClick={onSubmitChannel} style={{backgroundColor:'#351936',align:'left',color:'#fff'}}>
						<Icon name="checkmark" /> Join Channel
					</Button>
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
