import { alertConstants } from '../actionTypes/alertconstants';

function success(message) {
	return { type: alertConstants.SUCCESS, message };
}

function error(message) {
	return { type: alertConstants.ERROR, message };
}

export const alertActions = {
	success,
	error,
};
