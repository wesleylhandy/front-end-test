import React from "react";

import "./button.css";

const Button = ({ style = {}, clickHandler, text }) => (
	<button className="Button" style={style} onClick={clickHandler}>
		{text}
	</button>
);

export default Button;
