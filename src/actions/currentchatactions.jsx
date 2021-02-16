
import { currentChatConstants } from '../actionTypes';
export const currentchatactions = {
    currentchat
};
function currentchat(data) {
	return (dispatch) => {
		try {
			dispatch({
				type: currentChatConstants.CHAT_SUCCESS,
				payload: {data},
			});
		} catch (err) {
			dispatch({
				type: currentChatConstants.ERROR_CHAT,
				payload: {err},
			});
		}
	};
}