/** @format */

import React, { useState, useEffect } from "react";
import TechListItem from "./TechListItem";
import { get_tech } from "../../actions/tech_actions";

import { connect } from "react-redux";
const TechList = (props) => {
	const [techs, setTech] = useState([]);
	const [loading, setLoading] = useState(false);
	const { tech } = props;

	useEffect(() => {
		getTech();
	}, []);

	const getTech = async () => {
		//console.log(data);
		props.get_tech();
	};
	return (
		<div id='tech-list-modal' className='modal'>
			<ul className='collection with-header'>
				<li className='collection-header'>
					<h4>System Logs</h4>
				</li>
				{tech === null ? (
					<p>No records found</p>
				) : (
					tech.map((techval) => {
						return <TechListItem tech={techval} key={techval._id} />;
					})
				)}
			</ul>
		</div>
	);
};

const mapstateToprops = (state) => {
	return {
		tech: state.tech.techs,
	};
};

export default connect(mapstateToprops, { get_tech })(TechList);
