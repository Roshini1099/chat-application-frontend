import { chatConstants } from '../actionTypes';
import { chatService } from '../services';

export function createChannel(channelName, userId) {
	return (dispatch) => {
		try {
			const response = chatService.createChannel(channelName, userId);
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

export function addChannelMembers(channelId, userId) {
	return (dispatch) => {
		try {
			const response = chatService.addChannelMembers(channelId, userId);
			const { data } = response;
			dispatch({
				type: chatConstants.ADD_CHANNEL_MEMBERS_SUCCESS,
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
