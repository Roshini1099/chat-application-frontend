import React from 'react';
import { Menu } from 'semantic-ui-react';
import Channels from './channels/Channels';
import Userinfo from './userinfo/Userinfo';
import './Sidebar.css';
import UserInfo from '../chatSidebar/userinfo/Userinfo';

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
		</Menu>
	);
};
export default Sidebar;
