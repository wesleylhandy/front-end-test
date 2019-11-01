import React from "react";
import "./header.css";
import logo from "../../SVG/logo.svg";

const Header = ({ unreadCount = 0 }) => (
	<header className="header">
		<img src={logo} className="header__logo" alt="logo" />
		<h1 className="header__title">Notes Viewer Test App</h1>
		<div>
			Unread:
			<span className="header__title--unread-count">
				{/* TODO this should be a count of only the unread messages */}
				{ unreadCount }
			</span>
		</div>
	</header>
);

export default Header;
