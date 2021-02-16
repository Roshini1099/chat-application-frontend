
import { currentChatConstants } from '../actionTypes';
export const currentchatactions = {
    currentchat
};
function currentchat(data) {
	return (dispatch) => {
		try {
            console.log(data)
			dispatch({
				type: currentChatConstants.CHAT_SUCCESS,
				payload: {data},
			});
		} catch (err) {
			dispatch({
				type: currentChatConstants.ERROR_CHAT,
				payload: {data},
			});
		}
	};
}