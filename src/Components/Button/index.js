import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ style = {}, clickHandler, text }) => (
	<button className="Button" style={style} onClick={clickHandler}>
		{text}
	</button>
);

Button.propTypes = {
	style: PropTypes.object,
	clickHandler: PropTypes.func,
	text: PropTypes.string.isRequired,
};

export default Button;
