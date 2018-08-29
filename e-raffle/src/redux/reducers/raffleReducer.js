import * as actions from '../constants/action-types';
import initialState from './initialState'

export function raffleReducer(state = initialState.tickets, action) {
    let newState;
    switch (action.type) {
        case actions.SUBMIT_TICKETS:
            if (state[action.name]) {
                newState = { ...state };
                newState[action.name] = (state[action.name] + action.tickets);
            } else {
                newState = { ...state, [action.name]: action.tickets }
            }
            break;
        case actions.REMOVE_WINNER:
            newState = { ...state };
            newState[action.name] = (state[action.name] - 1);
        default:
            break;
    }
    return newState || state;
};