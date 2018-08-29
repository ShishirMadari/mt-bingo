import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { raffleReducer } from './raffleReducer'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	ui: uiReducer,
	tickets: raffleReducer,
	form: formReducer
});

export default rootReducer;