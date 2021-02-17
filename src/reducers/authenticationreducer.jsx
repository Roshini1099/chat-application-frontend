import { userConstants } from '../actionTypes';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action)
{
	const { type, payload } = action;
	switch (action.type) {
		case userConstants.LOGIN_REQUEST:
			return {
				loggingIn: true,
				user: action.user,
			};
		case userConstants.LOGIN_SUCCESS:
			return {
				loggedIn: true,
				user: payload.user,
			};
		case userConstants.GET_DETAILS_SUCCESS:
			return {
				data: payload.data,
			};
		case userConstants.GET_DETAILS_ERROR:
			return {
				data: payload.data,
			};
		case userConstants.EDIT_SUCCESS:
			return {
				data: payload.data,
			};
		case userConstants.EDIT_ERROR:
			return {
				data: payload.data,
			};
		case userConstants.LOGIN_FAILURE:
			return {};

		default:
			return state;
	}
}
