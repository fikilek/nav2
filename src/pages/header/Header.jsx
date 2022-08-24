import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import Dropdown from "../../components/dropdown/Dropdown";
import astNames from "../../data/astNames";
import trnNames from "../../data/trnNames";
import "./header.css";

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
							<NavLink to="/asts">Asts </NavLink>
							<Dropdown dropDown={astNames} />
						</li>
						<li>
							<NavLink to="/trns">Trns </NavLink>
							<Dropdown dropDown={trnNames} />
						</li>
					</ul>
				</div>
				<div className="mmr">
					<ul className="ml1">
						<li>
							<NavLink to="/admin">Admin </NavLink>
							<ul className="ml2 drop-downright">
								<li>
									<NavLink to="/users">users </NavLink>
								</li>
								<li>
									<NavLink to="/syst-tables">Sigh Out </NavLink>
									<ul className="ml2 dropdown-right">
										<li>
											<NavLink to="/roles">User Roles </NavLink>
										</li>
										<li>
											<NavLink to="/asts-states">Asts States </NavLink>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li onClick={() => setMenuOpen(false)}>
							<NavLink to="/unp">FK </NavLink>
							<ul className="ml2 dropdown-right">
								<li>
									<NavLink to="/profile">Profile </NavLink>
								</li>
								<li>
									<NavLink to="/signout">Sigh Out </NavLink>
								</li>
							</ul>
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
