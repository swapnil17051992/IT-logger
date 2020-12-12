/** @format */

import React from "react";
import { connect } from "react-redux";
import { delete_tech } from "../../actions/tech_actions";
const TectListItem = (props) => {
	//console.log(props);
	const { firstname, lastname, _id } = props.tech;
	return (
		<li className='collection-item'>
			<div>
				{firstname} {lastname}
				<a
					onClick={() => props.delete_tech(_id)}
					href='#!'
					className='secondary-content'>
					<i className='material-icons grey-text'>delete</i>
				</a>
			</div>
		</li>
	);
};

export default connect(null, { delete_tech })(TectListItem);
