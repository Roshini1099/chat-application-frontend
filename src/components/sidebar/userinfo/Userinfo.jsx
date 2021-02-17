import React from 'react';
import { Grid, Header, Icon, Image, Dropdown } from 'semantic-ui-react';
import './Userinfo.css';

const UserInfo = () => {
	const getDropDownOptions = () => {
		return [
			{
				key: 'signout',
				text: <span>Sign Out</span>,
			},
		];
	};
	return (
		<Grid>
			<Grid.Column>
				<Grid.Row className="userinfo_grid_row">
					<Header inverted as="h2">
						<Icon name="chat"></Icon>
						<Header.Content>Slack</Header.Content>
					</Header>
					<Header className="userinfo_displayname" inverted as="h4">
						<Dropdown
							trigger={
								<span>
									<Image src=""></Image>
									Roshini
								</span>
							}
							options={getDropDownOptions()}
						></Dropdown>
					</Header>
				</Grid.Row>
			</Grid.Column>
		</Grid>
	);
};
export default UserInfo;
