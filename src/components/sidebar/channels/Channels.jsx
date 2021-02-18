import React, { useState } from 'react';
import './Channels.css';
import { Menu, Icon, Modal, Button, Form, Segment } from 'semantic-ui-react';
const Channels = () => {
	const [modalOpenState, setModalOpenState] = useState(false);
	const openModal = () => {
		setModalOpenState(true);
	};

	const closeModal = () => {
		setModalOpenState(false);
	};

	return (
		<>
			<Menu.Menu style={{ marginTop: '' }}>
				<Menu.Item>
					<span>
						<Icon name="exchange" /> Channels
					</span>
					(0)
				</Menu.Item>
				<Menu.Item>
					<span>
						<Icon name="add" /> ADD
					</span>
				</Menu.Item>
			</Menu.Menu>
			<Modal
				open={modalOpenState}
				onClose={closeModal}
				style={{ left: '500px', height: '250px', top: '270px' }}
			>
				<Modal.Header>Create Channel</Modal.Header>

				<Modal.Content>
					<Form>
						<Segment stacked>
							<Form.Input
								name="name"
								type="text"
								placeholder="Enter Channel Name"
							/>
							<Form.Input
								name="description"
								type="text"
								placeholder="Enter Channel Description"
							/>
						</Segment>
					</Form>
				</Modal.Content>
			</Modal>
		</>
	);
};
export default Channels;
