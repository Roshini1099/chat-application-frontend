import { combineReducers } from 'redux';

import { authentication } from './authenticationreducer';
import { registration } from './registrationreducer';

import { alert } from './alertreducer';

const rootReducer = combineReducers({
	authentication,
	registration,
	alert,
});

export default rootReducer;
