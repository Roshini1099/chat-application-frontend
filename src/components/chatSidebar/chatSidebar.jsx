import React from 'react';
import './chatSidebar.css'
import { useDispatch, useSelector } from "react-redux";
import {currentchatactions } from '../../actions'
function ChatSidebar(props) {
    const userName = useSelector((state) => state.authentication.user.user.userName);
    const channels = useSelector(state => state.authentication.user.user.channels);
    const directMessage = useSelector(state => state.authentication.user.user.directMessage);
	const dispatch = useDispatch();
    function currentChatChannel(chat) {
        console.log(chat);
			dispatch(currentchatactions.currentchat(chat));
    }
    function currentChatDirectMessage(chat,receiver) {
        let data = {
            ...chat,
            ...receiver
        };
        console.log(data)
			dispatch(currentchatactions.currentchat(data));
    }
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h2>{userName}</h2>
            </div>
            <div className="sidebar__channel">
                <div><h4>Channel</h4></div>
                <div className="sidebar__channel__list">
                    {channels.map((value, index) => (
                        <div onClick={()=>currentChatChannel(value.chatId)}>
                            <h5>{value.chatId.chatName}</h5>
                        </div>
                    ))}
                </div>
                <div><h4>+ ADD</h4></div>
            </div>
            <div className="sidebar__channel">
                <div><h4>Direct Message</h4></div>
                <div className="sidebar__channel__list">
                    {directMessage.map((value, index) => (
                       <div onClick={()=>currentChatDirectMessage(value.chatId,value.receiverId)}>
                            <div className="profile">

                            </div>
                            <h5>{value.receiverId.userName}</h5>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default ChatSidebar;