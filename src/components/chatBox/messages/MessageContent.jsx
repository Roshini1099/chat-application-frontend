import React from 'react';
import { Comment, Icon, Popup } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
const MessageContent = () => {
	const messages = useSelector((state) => state.currentChat);

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
