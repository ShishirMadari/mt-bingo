import * as actions from '../constants/action-types';
import initialState from './initialState'

export function uiReducer(state = initialState.ui, action) {
    let newState;
    switch (action.type) {
        case actions.SHOW_COMPONENT:
            newState = { ...state };
            newState.app.currentComponent = action.component;
            break;

        default:
            break;
    }
    return newState || state;
};