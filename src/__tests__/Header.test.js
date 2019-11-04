import React from "react";
import Header from "../Components/Header";
import { create } from "react-test-renderer";

it("renders correctly", () => {
	const tree = create(<Header unreadCount={0} />).toJSON();
	expect(tree).toMatchSnapshot();
});

it("updates unread count when props change", () => {
	const tree = create(<Header unreadCount={20} />).toJSON();
	expect(tree).toMatchSnapshot();
});
