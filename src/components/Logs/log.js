/** @format */

import React, { useEffect, useState, Fragment } from "react";
import LogsItem from "./LogsItem";
import { connect } from "react-redux";

import Preloader from "../Preloader";
import { getlog } from "../../actions/log_actions";
import { get_tech } from "../../actions/tech_actions";
const Logs = (props) => {
	const { getlogs, gettech } = props;
	const { logs, loading } = props.log;
	useEffect(() => {
		debugger;
		getLogsn();
	}, []);

	const getLogsn = async () => {
		getlogs();
		gettech();
	};

	if (loading && logs === null) return <Preloader />;
	console.log(logs);
	return (
		<Fragment>
			<ul className='collection with-header'>
				<li className='collection-header'>
					<h4>System Logs</h4>
				</li>
				{logs === null || logs.length === 0 ? (
					<p>No Records Found</p>
				) : (
					logs.map((log) => {
						return <LogsItem log={log} key={log._id} />;
					})
				)}
			</ul>
		</Fragment>
	);
};

const mapStatetoprops = (state) => ({ log: state.log });

const mapDispatchtoProps = (dispatch) => ({
	getlogs: () => dispatch(getlog()),
	gettech: () => dispatch(get_tech),
});

export default connect(mapStatetoprops, mapDispatchtoProps)(Logs);
