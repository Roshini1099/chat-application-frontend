import { combineReducers } from 'redux';

import { authentication } from './authenticationreducer';
import { registration } from './registrationreducer';
import { chat } from './chatreducer';
import { alert } from './alertreducer';
import { currentChat } from './currentchatreducer'

const rootReducer = combineReducers({
	authentication,
	registration,
	alert,
	chat,
	currentChat
});

export default rootReducer;
