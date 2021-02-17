import { currentChatConstants, chatConstants } from '../actionTypes';
import { chatService } from '../services';

export function createChannel(chatName, userId, type, receiverId)
{
	return (dispatch) =>
	{
		try {
			const response = chatService.createChannel(
				chatName,
				userId,
				type,
				receiverId
			);
			const { data } = response;
			dispatch({
				type: chatConstants.CHANNEL_CREATE_SUCCESS,
				payload: data,
			});

		} catch (err) {
			const { data } = err.response;
			dispatch({
				type: chatConstants.ERROR_CHANNEL,
				payload: data,
			});
		}
	};
}

export function joinChannel(chatId, userId)
{
	return (dispatch) =>
	{
		try {
			const response = chatService.joinChannel(chatId, userId);
			const { data } = response;
			//create an event when a user joins new channel or DM
			dispatch({
				type: chatConstants.JOIN_CHANNEL_SUCCESS,
				payload: data,
			});
		} catch (err) {
			const { data } = err.response;
			dispatch({
				type: chatConstants.ERROR_CHANNEL,
				payload: data,
			});
		}
	};
}
export function searchChannel(searchString)
{
	return (dispatch) =>
	{
		try {
			const response = chatService.searchChannel(searchString);
			const { data } = response;
			dispatch({
				type: chatConstants.SEARCH_CHANNEL_SUCCESS,
				payload: data,
			});
		} catch (err) {
			const { data } = err.response;
			dispatch({
				type: chatConstants.ERROR_CHANNEL,
				payload: data,
			});
		}
	};
}

function message(text, senderId, chatId, type, index, senderName)
{
	return (dispatch) =>
	{
		chatService.Message(
			text,
			senderId,
			chatId,
			type,
			index,
			senderName
		).then(
			async (data) =>
			{
				// if(messages){
				// 	console.log(messages.currentchat._id,messages.currentchat.type);
				// 	let type = messages.currentchat.type;
				// 	if(type === "directMessage"){
				// 		console.log(user.directMessage);
				// 		let directMessage = user.directMessage;
				// 		for(var i=0;i<directMessage.length;i++){
				// 			if(directMessage[i].chatId._id === messages.currentchat._id)
				// 			{
				// 				console.log(directMessage[i].chatId, messages.currentchat)
				// 			}
				// 		}
				// 	}
				// 	else{
				// 		console.log(user.channel);
				// 	}
				// 	}
				// dispatch({

				// })
				dispatch({
					type: currentChatConstants.CHAT_SUCCESS,
					payload: { data },
				});
			}
		).catch(
			async (err) =>
			{
				dispatch({
					type: currentChatConstants.ERROR_CHAT,
					payload: { err },
				});
			}
		)
	}
}

