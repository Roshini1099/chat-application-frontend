import React from 'react';
import { Segment, Header, Input, Icon } from 'semantic-ui-react';

const MessageHeader = () => {
	return (
		<Segment clearing>
			<Header floated="left" fluid="true" as="h2">
				channel
			</Header>
			<Header floated="right">
				<Input
					name="search"
					icon="search"
					placeholder="Search"
					size="mini"
				/>
			</Header>
		</Segment>
	);
};
export default MessageHeader;
