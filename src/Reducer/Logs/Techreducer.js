/** @format */

import { GET_TECH, TECH_ERR, ADD_TECH, DELETE_TECH } from "../../actions/Types";

const initialState = {
	techs: null,
	error: null,
};

const techReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TECH:
			debugger;
			return {
				...state,
				techs: action.payload,
			};
		case ADD_TECH:
			return {
				...state,
				techs: [...state, action.payload],
			};
		case DELETE_TECH:
			return {
				...state,
				techs: state.techs.filter((tech) => tech._id !== action.payload),
			};
		default:
			return state;
	}
};

export default techReducer;
