import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import AppProvider from "./Context/AppProvider";
import registerServiceWorker from "./registerServiceWorker";

const entryPoint = document.getElementById("root");

ReactDOM.render(
	<AppProvider>
		<App />
	</AppProvider>,
	entryPoint
);

registerServiceWorker();
