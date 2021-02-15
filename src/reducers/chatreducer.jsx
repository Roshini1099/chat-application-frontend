import { chatConstants } from '../actionTypes';

export function registration(state = {}, action) {
	switch (action.type) {
		case chatConstants.CHANNEL_CREATE_SUCCESS:
			return {};
		case chatConstants.ADD_CHANNEL_MEMBERS_SUCCESS:
			return {};
		case chatConstants.ERROR_CHANNEL:
			return {};
		default:
			return state;
	}
}
