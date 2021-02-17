import { currentChatConstants } from '../actionTypes';

export function currentChat(state = null, action)
{
	const { type, payload } = action;
	switch (action.type) {
		case currentChatConstants.CHAT_SUCCESS:
			return {
				currentchat: payload.data,
				typing: false
			};
		case currentChatConstants.ERROR_CHAT:
			return {
				currentchat: payload.data,
				typing: false,
			};
		case currentChatConstants.TYPING:
			return {
				...state,
				typing: payload.typing,
				typinguser: payload.userName
			};
		default:
			return state;
	}
}
