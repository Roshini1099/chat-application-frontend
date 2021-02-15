import { chatConstants } from '../actionTypes';
let defaultChannelState = {
	currentchannel: null,
};
export function chat(state = defaultChannelState, action) {
	if (action.type === chatConstants.SET_CHANNEL) {
		let payload = action.payload;
		state = { ...payload };
		return state;
	}
	return state;
}
