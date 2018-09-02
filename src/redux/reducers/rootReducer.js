import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { raffleReducer } from './raffleReducer'
import {pieReducer} from './pieReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	ui: uiReducer,
	tickets: raffleReducer,
	pieEntries: pieReducer,
	form: formReducer
});

export default rootReducer;