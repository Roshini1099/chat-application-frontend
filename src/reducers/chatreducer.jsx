import { chatConstants } from '../actionTypes';

export function chat(state = {}, action) {
	const { type, payload } = action;
	switch (action.type) {
		case chatConstants.CHANNEL_CREATE_SUCCESS:
			return {
				data: payload.data,
			};
		case chatConstants.JOIN_CHANNEL_SUCCESS:
			return {
				data: payload.data,
			};
		case chatConstants.SEARCH_CHANNEL_SUCCESS:
			return {
				data: payload.data,
			};
		case chatConstants.MESSAGE_GET_SUCCESS:
			return {
				data: payload.data,
			};
		case chatConstants.ERROR_CHANNEL:
			return {
				data: payload.data,
			};
		default:
			return state;
	}
}
