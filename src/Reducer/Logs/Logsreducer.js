/** @format */

import {
	GET_LOGS,
	LOADING,
	ERROR_LOGS,
	ADD_LOGS,
	DELETE_LOGS,
	SETCURRENT_LOGS,
	UPDATE_LOG,
} from "../../actions/Types";

const initialstate = {
	logs: null,
	loading: false,
	error: null,
	current: null,
};

const LogReducer = (state = initialstate, action) => {
	switch (action.type) {
		case GET_LOGS:
			debugger;
			return {
				...state,
				logs: action.payload,
				loading: false,
			};
		case ADD_LOGS:
			return {
				...state,
				logs: [...state.logs, action.payload],
			};
		case DELETE_LOGS:
			return {
				...state,
				logs: state.logs.filter((log) => log._id !== action.payload),
			};
		case SETCURRENT_LOGS:
			debugger;
			return {
				...state,
				current: action.payload,
			};
		case UPDATE_LOG:
			debugger;
			return {
				...state,
				logs: state.logs.map((log) =>
					log._id === action.payload._id ? action.payload : log
				),
			};
		case LOADING:
			return {
				...state,
				loading: true,
			};
		case ERROR_LOGS:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default LogReducer;
