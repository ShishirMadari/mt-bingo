import * as actions from '../constants/action-types';

export function submitTickets(name, tickets, pieName) {
    return dispatch => {
        dispatch({
            type: actions.SUBMIT_TICKETS,
            name,
            tickets,
            pieName
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
