import React from "react";
import { NavLink } from "react-router-dom";
import dropdown from './dropdown.css'

const Dropdown = ({ dropDown }) => {
	return (
		<ul className="ml2 dropdown-left">
			{dropDown &&
				dropDown.map(item => (
					<li key={item.key}>
						<NavLink to={item.key}>{item.value}</NavLink>
					</li>
				))}
		</ul>
	);
};

export default Dropdown;
 