import React from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import './chatSidebar.css';
import { useDispatch, useSelector } from 'react-redux';
import { currentchatactions } from '../../actions';
import { chatService } from '../../services/chatservices'
import Channels from './channels/Channel';
import { newMessage } from '../../helpers/socket'
import Userinfo from './userinfo/Userinfo';
function ChatSidebar(props)
{
    const userName = useSelector(
        (state) => state.authentication.user.user.userName
    );
    const userId = useSelector(
        (state) => state.authentication.user.user._id
    );

    const channels = useSelector(
        (state) => state.authentication.user.user.channels
    );
    const directMessage = useSelector(
        (state) => state.authentication.user.user.directMessage
    );
    const dispatch = useDispatch();

    function currentChatChannel(chat)
    {
        console.log(chat);
        dispatch(currentchatactions.currentchat(chat));
    }

    function currentChatDirectMessage(chat, receiver)
    {
        console.log('reciever', receiver);
        let data = {
            ...chat,
            recieverId: receiver._id,
            recieverName: receiver.userName,
        };
        dispatch(currentchatactions.currentchat(data));


        chatService.updateStatus(data._id, userId, 'seen')
            .then(() =>
            {
                console.log('update statis success [chatsidebarjsx]')
                newMessage({
                    type: data.type,
                    chatId: data._id,
                    recieverId: data.recieverId,
                    recieverName: data.recieverName,
                    senderId: userId,
                    senderName: userName
                })
            })
            .catch((err) =>
            {
                console.log(err);
            })
    }

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h2>{userName}</h2>
            </div>

            <Channels />

            <div className="sidebar__channel">
                <div className="sidebar__channel__list">
                    {channels.map((value, index) => (
                        <div onClick={() => currentChatChannel(value.chatId)}>
                            <h5>{value.chatId.chatName}</h5>
                        </div>
                    ))}
                </div>
            </div>
            <div className="sidebar__channel">
                <div>
                    <h4>Direct Message</h4>
                </div>
                <div className="sidebar__channel__list">
                    {directMessage.map((value, index) => (
                        <div
                            onClick={() =>
                                currentChatDirectMessage(
                                    value.chatId,
                                    value.receiverId
                                )
                            }
                        >
                            <div className="profile"></div>
                            <h5>{value.receiverId.userName}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ChatSidebar;
