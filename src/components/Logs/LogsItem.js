/** @format */

import React from "react";

import { delete_logs, setcurrent_logs } from "../../actions/log_actions";
import { connect } from "react-redux";
const LogsItem = (props) => {
	const { message, attention, tech, date, TechDetails } = props.log;
	const { firstname, lastname } = ["swapil", "kurjekar"];
	console.log(firstname);
	return (
		<li className='collection-item'>
			<div>
				<a
					style={{ cursor: "pointer" }}
					onClick={() => {
						props.setcurrent_logs(props.log);
					}}
					href='#edit-modal-item'
					className={`modal-trigger ${attention ? "red-text" : "green-text"}`}>
					{message}
				</a>
				<br />
				<span className='title'>
					<span>
						{firstname} {lastname}
					</span>{" "}
					<span>{date}</span>
				</span>
				<a
					href='#!'
					onClick={() => props.delete_logs(props.log)}
					className='secondary-content'>
					<i className='material-icons grey-text'>delete</i>
				</a>
			</div>{" "}
		</li>
	);
};

export default connect(null, { delete_logs, setcurrent_logs })(LogsItem);
