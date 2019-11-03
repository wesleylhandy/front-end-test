import React from "react";
import ReactDOM from "react-dom";
import AppProvider from "../Context/AppProvider";
import App from "../Components/App";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<AppProvider>
			<App />
		</AppProvider>,
		div
	);
});
