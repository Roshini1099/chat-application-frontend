import React from 'react';
import './chatSidebar.css';

function ChatSidebar(props) {
	return (
		<div className="sidebar">
			<div className="sidebar_user-profile">
				<div className="sidebar_avatar">
					<img src="https://www.flaticon.com/svg/static/icons/svg/2919/2919600.svg" />
				</div>
				<div>
					<h3>Roshini</h3>
				</div>
				<div
					style={{
						marginLeft: 160,
						marginTop: 0.1,
						cursor: 'pointer',
					}}
					//add logout button here
				>
					<img
						src="https://www.flaticon.com/svg/static/icons/svg/2150/2150480.svg"
						height="25"
						// onClick={Logout}
					/>
				</div>
			</div>
			<hr className="sidebar-spacer" />

			<div className="sidebar__channel">
				<div className="sidebar_channel_header">
					<h5>Channel</h5>
				</div>
				<ul className="sidebar_channels-list">
					<div className="profile">
						<li>friend1</li>
						<li>friend2</li>
					</div>
				</ul>
			</div>
			<div className="sidebar__channel">
				<div>
					<h4>Direct Message</h4>
				</div>
				<div className="sidebar__channel__list">
					<div>
						<div className="profile"></div>
						<h5>Hyperverge</h5>
					</div>
					<div>
						<div className="profile"></div>
						<h5>Hyperverge</h5>
					</div>
					<div>
						<div className="profile"></div>
						<h5>Hyperverge</h5>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChatSidebar;
