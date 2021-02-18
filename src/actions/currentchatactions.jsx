
import { currentChatConstants, userConstants } from '../actionTypes';
import axios from '../helpers/axios'
import { newMessage } from '../helpers/socket'
export const currentchatactions = {
	currentchat, typing, fetchChat, addChat
};
function currentchat(data)
{
	console.log(data)
	return (dispatch) =>
	{
		try {
			dispatch({
				type: currentChatConstants.CHAT_SUCCESS,
				payload: { data },
			});
		} catch (err) {
			dispatch({
				type: currentChatConstants.ERROR_CHAT,
				payload: { err },
			});
		}
	};
}

function typing(data, userName)
{

	return ({
		type: currentChatConstants.TYPING,
		payload: { typing: data, userName }
	});
}

function addChat(data, user)
{
	console.log('into the add chat')
	return (dispatch) =>
	{
		axios.post('/api/message', data)
			.then(response =>
			{
				console.log(data)
				newMessage({
					type: response.data.type,
					chatId: response.data._id,
					recieverId: data.recieverId,
					recieverName: data.recieverName,
					senderId: data.senderId,
					senderName: data.senderName
				})

				let data_ = {
					...response.data,
					recieverId: data.recieverId,
					recieverName: data.recieverName
				}
				dispatch({
					type: currentChatConstants.CHAT_SUCCESS,
					payload: { data: data_ },
				});
				let updatedUser = currentMessage(response.data, user);
				dispatch({
					type: userConstants.LOGIN_SUCCESS,
					payload: { user: updatedUser }
				})
			})
	}
}

function fetchChat(payload, user)
{
	return (dispatch) =>
	{
		axios.post('/api/getChat', { chatId: payload.chatId })
			.then(response =>
			{
				let data = {
					...response.data,
					recieverId: payload.senderId,
					recieverName: payload.senderName
				}
				dispatch({
					type: currentChatConstants.CHAT_SUCCESS,
					payload: { data: data },
				});
				let updatedUser = currentMessage(response.data, user);
				dispatch({
					type: userConstants.LOGIN_SUCCESS,
					payload: { user: updatedUser }
				})
			})
	}
}
function currentMessage(data, user)
{
	let type = data.type;
	if (type === "directMessage") {
		let directMessage = user.user.directMessage
		for (var i = 0; i < directMessage.length; i++) {
			if (directMessage[i].chatId._id === data._id) {
				directMessage[i].chatId = {
					...directMessage[i].chatId,
					...data
				}
			}
		}
		user.user.directMessage = directMessage;
		return user;
	}
	else {
		let channels = user.user.channels
		for (var i = 0; i < channels.length; i++) {
			if (channels[i].chatId._id === data._id) {
				channels[i].chatId = {
					...channels[i].chatId,
					...data
				}
			}
		}
		user.user.channels = channels;
		return user;
	}
}