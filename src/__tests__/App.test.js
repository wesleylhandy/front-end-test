import React from "react";
import { create } from "react-test-renderer";
import App from "../Components/__mocks__/App";
import AppProvider from "../Context/__mocks__/AppProvider";

/**** NEEDS IMPROVEMENT ****/
/*	This tests the functionality of two mock component
/*  that match the current state of the components
/*  but won't catch changes...
/*  I'm not all that certain how to test Context Api properly
/**** 					****/

it("renders correctly", () => {
	const tree = create(
		<AppProvider>
			<App />
		</AppProvider>
	).toJSON();
	expect(tree).toMatchSnapshot();
});
