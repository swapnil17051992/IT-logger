/** @format */

import { GET_TECH, TECH_ERR, ADD_TECH, DELETE_TECH } from "./Types";

export const get_tech = () => {
	return async (dispatch) => {
		try {
			const res = await fetch("http://localhost:5000/tech");
			const data = await res.json();

			dispatch({ type: GET_TECH, payload: data });
		} catch (error) {
			dispatch({ type: TECH_ERR, payload: error });
		}
	};
};

export const add_tech = (formdata) => {
	return async (dispatch) => {
		try {
			const res = await fetch("http://localhost:5000/api/tech", {
				method: "POST",
				body: JSON.stringify(formdata),
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = res.json();

			dispatch({ type: ADD_TECH, payload: data });
		} catch (error) {
			dispatch({ type: TECH_ERR, payload: error });
		}
	};
};

export const delete_tech = (_id) => async (dispatch) => {
	try {
		debugger;
		await fetch(`http://localhost:5000/api/tech/${_id}`, {
			method: "DELETE",
		});

		dispatch({ type: DELETE_TECH, payload: _id });
	} catch (error) {
		dispatch({ type: TECH_ERR, payload: error });
	}
};
