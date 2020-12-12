/** @format */

import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min";
import { connect } from "react-redux";
import { updatelogs, getlog } from "../../actions/log_actions";

const EditLogsModal = (props) => {
	debugger;

	const [message, setMessage] = useState("");
	const [attention, setAttention] = useState(false);
	const [tech, setTech] = useState("");
	const { technician } = props;
	console.log(technician);
	useEffect(() => {
		debugger;
		if (props.setcurrent) {
			console.log("ss");
			setMessage(props.setcurrent.message);
			setAttention(props.setcurrent.attention);
			setTech(props.setcurrent.tech);
		}

		//props.getlog();
	}, [props.setcurrent]);

	const OnSubmit = async (e) => {
		e.preventDefault();
		debugger;
		if (message === "" && tech === "") {
			M.toast({ html: "Please select fields!!" });
		} else {
			await props.updatelogs({
				message,
				attention,
				tech,
				_id: props.setcurrent._id,
			});

			M.toast({ html: "Logs Updated successfully" });
			props.getlog();
		}

		// setMessage("");
		// setAttention(false);
		// setTech("");
		// console.log(message, attention, tech);
	};
	return (
		<div id='edit-modal-item' className='modal' style={modalstyle}>
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
							{technician === null ? (
								<option>No Record found</option>
							) : (
								technician.map((val) => {
									return (
										<option key={val._id} value={val._id}>
											{val.firstname} {val.lastname}
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

const modalstyle = {
	width: "60%",
	height: "80%",
};

const mapStatetoProps = (state) => {
	return {
		setcurrent: state.log.current,
		technician: state.tech.techs,
	};
};

export default connect(mapStatetoProps, { updatelogs, getlog })(EditLogsModal);
