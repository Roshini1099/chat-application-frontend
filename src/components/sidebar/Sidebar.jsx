import React from 'react';
import { Menu } from 'semantic-ui-react';
import Channels from './channels/Channels';
import Userinfo from './userinfo/Userinfo';
import './Sidebar.css';
import UserInfo from './userinfo/Userinfo';

export const Sidebar = () => {
	return (
		<Menu
			vertical
			fixed="left"
			borderless
			size="large"
			className="side_bar"
		>
			<UserInfo />
			<Channels />
		</Menu>
	);
};
export default Sidebar;
