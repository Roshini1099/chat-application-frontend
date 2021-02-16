import { combineReducers } from 'redux';

import { authentication } from './authenticationreducer';
import { registration } from './registrationreducer';
import { chat } from './chatreducer';
import { alert } from './alertreducer';

const rootReducer = combineReducers({
	authentication,
	registration,
	alert,
	chat,
});

export default rootReducer;
