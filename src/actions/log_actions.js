/** @format */

import {
	GET_LOGS,
	LOADING,
	ERROR_LOGS,
	ADD_LOGS,
	DELETE_LOGS,
	SETCURRENT_LOGS,
	UPDATE_LOG,
} from "./Types";

export const getlog = () => {
	return async (dispatch) => {
		debugger;
		console.log("ssssss");
		try {
			_setLoading();
			debugger;
			const res = await fetch("http://localhost:5000/logs");
			const data = await res.json();

			dispatch({
				type: GET_LOGS,
				payload: data,
			});
		} catch (err) {
			dispatch({ type: ERROR_LOGS, payload: err });
		}
	};
};

export const add_log = (formdata) => async (dispatch) => {
	try {
		debugger;
		const res = await fetch("http://localhost:5000/api/log", {
			method: "POST",
			body: JSON.stringify(formdata),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await res.json();

		dispatch({ type: ADD_LOGS, payload: data });
	} catch (err) {
		dispatch({ type: ERROR_LOGS, payload: err });
	}
};

export const delete_logs = (log) => {
	debugger;
	return async (dispatch) => {
		debugger;
		try {
			await fetch(`http://localhost:5000/api/log/${log._id}`, {
				method: "DELETE",
			});

			dispatch({ type: DELETE_LOGS, payload: log._id });
		} catch (err) {
			dispatch({ type: ERROR_LOGS, payload: err });
		}
	};
};

export const setcurrent_logs = (log) => {
	return (dispatch) => {
		debugger;
		dispatch({ type: SETCURRENT_LOGS, payload: log });
	};
};

export const updatelogs = (log) => {
	return async (dispatch) => {
		try {
			debugger;
			const res = await fetch(`http://localhost:5000/api/log/${log._id}`, {
				method: "PUT",
				body: JSON.stringify(log),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();

			dispatch({ type: UPDATE_LOG, payload: data });
		} catch (error) {
			dispatch({ type: ERROR_LOGS, payload: error });
		}
	};
};
// set loading
export const _setLoading = () => (dispatch) => {
	dispatch({ type: LOADING });
};
