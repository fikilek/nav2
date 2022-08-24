import React from "react";
import { NavLink } from "react-router-dom";
import "./testDropdown.css";

const TestDropdown = ({ treeData }) => {
	console.log(`treeData`, treeData);
	return (
		<>
			{treeData &&
				treeData.map(item => (
					<ul className="ml-2">
						<li>
							<div>
								{item.key} `:` {item.value}
							</div>
						</li>
						{console.log(`children`, item.children)}

						{item.children && <TestDropdown treeData={item.children} />}
					</ul>
				))}
		</>
	);
};

export default TestDropdown;
