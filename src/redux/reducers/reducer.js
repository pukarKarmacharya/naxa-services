import {GET_SERVICES_SUCCESS} from '../actions/actions'

const myReducer = (state = { services:[]}, action) => {
	switch (action.type) {
		case GET_SERVICES_SUCCESS:
			return {...state, services: action.services};
		default:
			return state;
	}
};

export default myReducer;
