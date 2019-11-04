import React from "react";
import PropTypes from "prop-types";
import "./header.css";
import logo from "../../SVG/logo.svg";

const Header = ({ unreadCount = 0 }) => (
	<header className="header">
		<img src={logo} className="header__logo" alt="logo" />
		<h1 className="header__title">Notes Viewer Test App</h1>
		<div className="header__unread-count">
			Unread:
			<span className="header__unread-count--count">{unreadCount}</span>
		</div>
	</header>
);

Header.propTypes = {
	unreadCount: PropTypes.number.isRequired,
};

export default Header;
