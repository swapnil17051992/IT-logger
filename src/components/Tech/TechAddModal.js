/** @format */

import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min";
import { add_tech, get_tech } from "../../actions/tech_actions";
import { connect } from "react-redux";
const AddTechModal = (props) => {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");

	const OnSubmit = async () => {
		if (firstname === "" && lastname === "") {
			M.toast({ html: "Please select fields!!" });
		} else {
			await props.add_tech({
				firstname,
				lastname,
			});

			M.toast({ html: "Technician saved successfully !!" });
			props.get_tech();
		}

		console.log(firstname, lastname);
	};
	return (
		<div id='add-tech-modal' className='modal' style={modalstyle}>
			<div className='modal-content'>
				<h4>Enter Technician</h4>

				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='firstname'
							value={firstname}
							onChange={(e) => setFirstname(e.target.value)}
						/>
						<label htmlFor='firstname' className='active'>
							First Name
						</label>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='lastname'
							value={lastname}
							onChange={(e) => setLastname(e.target.value)}
						/>
						<label htmlFor='lastname' className='active'>
							Last Name
						</label>
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
	width: "50%",
	height: "50%",
};

export default connect(null, { add_tech, get_tech })(AddTechModal);
