import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container">
					<Link className="navbar-brand fw-bold" to="/">
						M H Khan
					</Link>
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link
								className="nav-link active fw-bold"
								aria-current="page"
								to="/"
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link fw-bold" to="/service">
								Service
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link fw-bold" to="/about">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link  fw-bold" to="/contact">
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
