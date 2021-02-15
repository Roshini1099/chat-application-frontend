import React from 'react';
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './chatBox.css'

function ChatBox(props)
{
    return (
        <div className="chatbox">
            <div className="chatbox__header">
                <div className="chatbox__header__title">
                    <h2>Product</h2>
                    {/* replace class online with lastseen. */}
                    <div className="online"></div>
                </div>
                {/* visible only in case of channels */}
                <div>
                    <AddCircleOutlineIcon />
                </div>
            </div>
            <div className="chatbox__body">
                <div className="chatbox__body__message">
                    <div className="chatbox__body__message__header">
                        <div className="profile"></div>
                        <div className="chatbox__username"><h5>Ashish</h5></div>
                        <div className="lastseen"> 12:13pm</div>
                    </div>
                    <div className="chatbox__body__message__text">
                        <p>This is the meesage from prem.</p>
                    </div>
                </div>
                <div className="chatbox__body__message">
                    <div className="chatbox__body__message__header">
                        <div className="profile"></div>
                        <div className="chatbox__username"><h5>Ashish</h5></div>
                        <div className="lastseen"> 12:13pm</div>
                    </div>
                    <div className="chatbox__body__message__text">
                        <p>This is the meesage from prem.</p>
                    </div>
                </div>
                <div className="chatbox__body__message">
                    <div className="chatbox__body__message__header">
                        <div className="profile"></div>
                        <div className="chatbox__username"><h5>Ashish</h5></div>
                        <div className="lastseen"> 12:13pm</div>
                    </div>
                    <div className="chatbox__body__message__text">
                        <p>This is the meesage from prem.</p>
                    </div>
                </div>
                <div className="chatbox__body__message">
                    <div className="chatbox__body__message__header">
                        <div className="profile"></div>
                        <div className="chatbox__username"><h5>Ashish</h5></div>
                        <div className="lastseen"> 12:13pm</div>
                    </div>
                    <div className="chatbox__body__message__text">
                        <p>This is the meesage from prem.</p>
                    </div>
                </div>
                <div className="chatbox__body__message">
                    <div className="chatbox__body__message__header">
                        <div className="profile"></div>
                        <div className="chatbox__username"><h5>Ashish</h5></div>
                        <div className="lastseen"> 12:13pm</div>
                    </div>
                    <div className="chatbox__body__message__text">
                        <p>This is the meesage from prem.</p>
                    </div>
                </div>
                <div className="chatbox__body__message">
                    <div className="chatbox__body__message__header">
                        <div className="profile"></div>
                        <div className="chatbox__username"><h5>Ashish</h5></div>
                        <div className="lastseen"> 12:13pm</div>
                    </div>
                    <div className="chatbox__body__message__text">
                        <p>This is the meesage from prem.</p>
                    </div>
                </div>
                <div className="chatbox__body__message">
                    <div className="chatbox__body__message__header">
                        <div className="profile"></div>
                        <div className="chatbox__username"><h5>Ashish</h5></div>
                        <div className="lastseen"> 12:13pm</div>
                    </div>
                    <div className="chatbox__body__message__text">
                        <p>This is the meesage from prem.</p>
                    </div>
                </div>
                <div className="chatbox__body__message">
                    <div className="chatbox__body__message__header">
                        <div className="profile"></div>
                        <div className="chatbox__username"><h5>Ashish</h5></div>
                        <div className="lastseen"> 12:13pm</div>
                    </div>
                    <div className="chatbox__body__message__text">
                        <p>This is the meesage from prem.</p>
                    </div>
                </div>
                <div className="chatbox__body__message">
                    <div className="chatbox__body__message__header">
                        <div className="profile"></div>
                        <div className="chatbox__username"><h5>Ashish</h5></div>
                        <div className="lastseen"> 12:13pm</div>
                    </div>
                    <div className="chatbox__body__message__text">
                        <p>This is the meesage from prem.</p>
                    </div>
                </div>
            </div>
            <div className="chatbox__footer">
                <div className="chatbox__footer__body">
                    <div className="chatbox__footer__input">
                        <input placeholder="Enter message" />
                    </div>
                    <div>
                        <AttachFileIcon />
                    </div>
                    <div>
                        <SendIcon style={{ color: "blue" }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatBox;