import { currentChatConstants } from '../actionTypes';

export function currentChat(state = null, action)
{
	const { type, payload } = action;
	switch (action.type) {
		case currentChatConstants.CHAT_SUCCESS:
			return {
				currentchat: payload.data,
			};
		case currentChatConstants.ERROR_CHAT:
			return {
				currentchat: payload.data,
			};
		default:
			return state;
	}
}
