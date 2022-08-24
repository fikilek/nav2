import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import Dropdown from "../../components/dropdown/Dropdown";
import astNames from "../../data/astNames";
import trnNames from "../../data/trnNames";
import "./header.css";
import unpDropdown from "../../data/unpDropdown";
import adminDropdown from "../../data/adminDropdown";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="nav">
			<NavLink to="/">iREPS </NavLink>
			<div
				className={menuOpen ? "mm mm-show" : "mm mm-hide"}
				onClick={() => setMenuOpen(false)}
			>
				<div className="mml">
					<ul className="ml1">
						<li>
							<NavLink to="/dbd">Dbd </NavLink>
							<Dropdown dropDown={astNames} menuLevel="ml2" side="left" />
						</li>
						<li>
							<NavLink to="/asts">Asts </NavLink>
							<Dropdown dropDown={astNames} menuLevel="ml2" side="left" />
						</li>
						<li>
							<NavLink to="/trns">Trns </NavLink>
							<Dropdown dropDown={trnNames} menuLevel="ml2" side="left" />
						</li>
						<li>
							<NavLink to="/erfs">Erfs </NavLink>
						</li>
					</ul>
				</div>
				<div className="mmr">
					<ul className="ml1">
						<li>
							<NavLink to="/bok">Bok </NavLink>
						</li>
						<li>
							<NavLink to="/admin">Admin </NavLink>
							<Dropdown dropDown={adminDropdown} menuLevel="ml2" side="right" />
						</li>
						<li onClick={() => setMenuOpen(false)}>
							<NavLink to="/unp">FK </NavLink>
							<Dropdown dropDown={unpDropdown} menuLevel="ml2" side="right" />
						</li>
					</ul>
				</div>
			</div>
			<div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
				{menuOpen ? <MdClose /> : <MdMenu />}
			</div>
		</nav>
	);
};

export default Header;
