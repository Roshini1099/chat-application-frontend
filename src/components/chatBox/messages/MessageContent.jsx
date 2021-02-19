import React from 'react';
import { Comment, Icon, Popup } from 'semantic-ui-react';
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
							{data.isFile ? <a target='_blank' href={data.text}>{data.text}</a> : data.text}
						</Comment.Text>
						<Comment.Actions>
							<Comment.Action>
								<Icon name="edit"></Icon>
							</Comment.Action>
							<Comment.Action>
								<Icon name="trash alternate"></Icon>
							</Comment.Action>
							<Comment.Action></Comment.Action>
						</Comment.Actions>
					</Comment.Content>
				</Comment>
				{/* ))} */}
			</Comment.Group>
		</div>
	);
};
export default MessageContent;
