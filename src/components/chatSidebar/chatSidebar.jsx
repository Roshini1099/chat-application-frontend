import React from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import './chatSidebar.css'

function ChatSidebar(props)
{
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h2>Hyperverge</h2>
            </div>
            <div className="sidebar__search">
                <input placeholder="Add people/channel" />
                <span>
                    <AddBoxIcon style={{ "color": "green", "width": "50px", "fontSize": "35px" }} />
                </span>
            </div>
            <div className="sidebar__channel">
                <div><h4>Channel</h4></div>
                <div className="sidebar__channel__list">
                    <div>
                        <h5>#Hyperverge</h5>
                    </div>
                    <div>
                        <h5>#Hyperverge</h5>
                    </div> <div>
                        <h5>#Hyperverge</h5>
                    </div>
                </div>
            </div>
            <div className="sidebar__channel">
                <div><h4>Direct Message</h4></div>
                <div className="sidebar__channel__list">
                    <div>
                        <div className="profile">

                        </div>
                        <h5>Hyperverge</h5>
                    </div>
                    <div>
                        <div className="profile">

                        </div>
                        <h5>Hyperverge</h5>
                    </div>
                    <div>
                        <div className="profile">

                        </div>
                        <h5>Hyperverge</h5>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default ChatSidebar;