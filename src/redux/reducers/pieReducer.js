import * as actions from '../constants/action-types';
import initialState from './initialState'

export function pieReducer(state = initialState.pie, action) {
    let newState;
    switch (action.type) {
        case actions.SUBMIT_TICKETS:
            if (action.pieName === "None") { break; }
            
            if (state[action.pieName]) {
                newState = { ...state };
                newState[action.pieName] = (state[action.pieName] + action.tickets);
            } else {
                newState = { ...state, [action.pieName]: action.tickets }
            }
            break;
        default:
            break;
    }
    return newState || state;
};