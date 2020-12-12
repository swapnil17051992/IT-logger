/** @format */

import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min";

import { add_log } from "../../actions/log_actions";
import { get_tech } from "../../actions/tech_actions";
import { connect } from "react-redux";
const AddLogsModal = (props) => {
	const { get_tech } = props;
	const { techs } = props.tech;
	const [message, setMessage] = useState("");
	const [attention, setAttention] = useState(false);
	const [tech, setTech] = useState("");

	useEffect(() => {
		debugger;
		get_tech();
	}, []);

	console.log(techs);
	const OnSubmit = () => {
		debugger;
		if (message === "" && tech === "") {
			M.toast({ html: "Please select fields!!" });
		} else {
			debugger;
			props.add_log({
				message,
				attention,
				tech,
			});
		}

		console.log(message, attention, tech);
	};
	return (
		<div id='add-log-modal' className='modal' style={modalstyle}>
			<div className='modal-content'>
				<h4>Enter System Logs</h4>

				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='message'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
						<label htmlFor='message' className='active'>
							Log Message
						</label>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<select
							name='tech'
							value={tech}
							className='browser-default'
							onChange={(e) => setTech(e.target.value)}>
							<option value='' disabled>
								Select Tech
							</option>
							{techs === null ? (
								<option>No Record found</option>
							) : (
								techs.map((techval) => {
									return (
										<option key={techval._id} value={techval._id}>
											{techval.firstname} {techval.lastname}
										</option>
									);
								})
							)}
						</select>
					</div>
				</div>
				<div className='row'>
					<div className='input-field' style={{ float: "left" }}>
						<p>
							<label>
								<input
									type='checkbox'
									className='filled-in'
									checked={attention}
									value={attention}
									onChange={(e) => setAttention(!attention)}
								/>
								<span>Attention</span>
							</label>
						</p>
					</div>
				</div>
			</div>
			<div className='modal-footer'>
				<a
					href='#!'
					className='modal-close waves-effect waves-light btn'
					onClick={OnSubmit}>
					Enter
				</a>
			</div>
		</div>
	);
};

const mapstatetoprops = (state) => {
	return {
		tech: state.tech,
	};
};

const modalstyle = {
	width: "60%",
	height: "80%",
};

export default connect(mapstatetoprops, { add_log, get_tech })(AddLogsModal);
