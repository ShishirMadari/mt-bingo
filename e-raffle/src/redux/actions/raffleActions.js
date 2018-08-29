import * as actions from '../constants/action-types';

export function submitTickets(name, tickets) {
    return dispatch => {
        dispatch({
            type: actions.SUBMIT_TICKETS,
            name,
            tickets
        });
    };
};

export function removeWinningTicket(name) {
    return dispatch => {
        dispatch({
            type: actions.REMOVE_WINNER,
            name
        });
    };
};
