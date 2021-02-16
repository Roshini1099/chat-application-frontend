import { chatConstants } from '../actionTypes';
import { chatService } from '../services';

export function createChannel(chatName, userId, type, receiverId) {
	return (dispatch) => {
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

export function joinChannel(chatId, userId) {
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
export function searchChannel(searchString) {
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
export function message(text, senderId, chatName, type, index) {
	return (dispatch) => {
		try {
			const response = chatService.message(
				text,
				senderId,
				chatName,
				type,
				index
			);
			const { data } = response;
			dispatch({
				type: chatConstants.MESSAGE_GET_SUCCESS,
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
