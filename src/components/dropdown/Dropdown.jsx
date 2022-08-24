import React from "react";
import { NavLink } from "react-router-dom";
import './dropdown.css'

const Dropdown = ({ dropDown, menuLevel, side }) => {
	return (
		<ul className={`${menuLevel} dropdown-${side}`}>
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
 