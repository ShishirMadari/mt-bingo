import * as actions from '../constants/action-types';

export const components = {
	HOMEPAGE: "homePage",
	RAFFLE: "rafflePage",
	TICKETFORM: "ticketForm",
	PIE_LEADERBOARD: "pieLeaderboard",
}

export function showComponent(component) {
	return dispatch => {
		dispatch({
			type: actions.SHOW_COMPONENT,
			component
		});
	};
};
