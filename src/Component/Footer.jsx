import React from "react";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<>
			<footer className="w-100 bg-light text-center">
				<h5>© {year} All Rights Reserved </h5>
			</footer>
		</>
	);
};

export default Footer;
