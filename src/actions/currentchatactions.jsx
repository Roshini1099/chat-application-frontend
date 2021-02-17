
import { currentChatConstants } from '../actionTypes';
export const currentchatactions = {
	currentchat, typing
};
function currentchat(data)
{
	console.log(data)
	return (dispatch) =>
	{
		try {
			dispatch({
				type: currentChatConstants.CHAT_SUCCESS,
				payload: { data },
			});
		} catch (err) {
			dispatch({
				type: currentChatConstants.ERROR_CHAT,
				payload: { err },
			});
		}
	};
}

function typing(data, userName)
{

	return ({
		type: currentChatConstants.TYPING,
		payload: { typing: data, userName }
	});
}