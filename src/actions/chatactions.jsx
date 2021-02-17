import {
	currentChatConstants,
	chatConstants,
	userConstants,
} from '../actionTypes';
import { chatService } from '../services';
export const chatActions = {
	message,
	createChannel,
	joinChannel,
	searchChannel,
};
function createChannel(chatName, userId, type) {
	return (dispatch) => {
		console.log('inside func');
		chatService.createChannel(chatName, userId, type).then(
			async (data) => {
				console.log(data);
				dispatch({
					type: chatConstants.CHANNEL_CREATE_SUCCESS,
					payload: { data },
				});
			},
			(error) => {
				console.log('inside error block');
				dispatch({
					type: chatConstants.ERROR_CHANNEL,
					payload: error,
				});
			}
		);
	};
}

function joinChannel(chatId, userId) {
	return (dispatch) => {
		try {
			const response = chatService.joinChannel(chatId, userId);
			const { data } = response;
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
function searchChannel(searchString) {
	return (dispatch) => {
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

function message(text, senderId, chatId, type, index, senderName) {
	return (dispatch) => {
		chatService
			.Message(text, senderId, chatId, type, index, senderName)
			.then(async (data) => {
				dispatch({
					type: currentChatConstants.CHAT_SUCCESS,
					payload: { data },
				});
			})
			.catch(async (err) => {
				dispatch({
					type: currentChatConstants.ERROR_CHAT,
					payload: { err },
				});
			});
	};
}
