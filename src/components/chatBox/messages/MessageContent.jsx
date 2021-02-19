import React, { Component, useState } from 'react';
import { Comment, Popup } from 'semantic-ui-react';

import { useDispatch, useSelector } from 'react-redux';

import { currentchatactions } from '../../../actions';
const MessageContent = ({ data, userId }) =>
{
	return (
		<div style={{ marginTop: '30px' }}>
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
