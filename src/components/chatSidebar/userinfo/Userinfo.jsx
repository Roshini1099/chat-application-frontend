import React from 'react';
import { Grid, Header, Icon, Image, Dropdown } from 'semantic-ui-react';
import { userActions } from '../../../actions';
import { useDispatch, useSelector } from 'react-redux';
import './Userinfo.css';

function Userinfo(props) {
	const userName = useSelector(
		(state) => state.authentication.user.user.userName
	);

	const getDropDownOptions = () => {
		return [
			{
				key: 'signout',
				text: <span onClick={signout}>Signout</span>,
			},
		];
	};
	function signout() {
		// remove user from local storage to log user out
		localStorage.removeItem('user');
		props.history.push('/login');
	}

	return (
		<Grid>
			<Grid.Column>
				<Grid.Row className="userinfo_grid_row">
					<Header inverted as="h2">
						<Icon name="Chat" />
						<Header.Content>ChatApp</Header.Content>
					</Header>
					<Header className="userinfo_displayname" inverted as="h4">
						<Dropdown
							trigger={<span>{userName}</span>}
							options={getDropDownOptions()}
						></Dropdown>
					</Header>
				</Grid.Row>
			</Grid.Column>
		</Grid>
	);
}

export default Userinfo;
