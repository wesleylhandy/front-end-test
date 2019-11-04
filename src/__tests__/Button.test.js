import React from "react";
import Button from "../Components/Button";
import { create, act } from "react-test-renderer";

it("renders correctly", () => {
	const tree = create(
		<Button
			text={"Initial Value"}
			clickHandler={() => jest.fn()}
			style={{ color: "white", background: "black" }}
		/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});

it("displays the right text when the props is updated", () => {
	const tree = create(<Button text={"Some Other Text"} />).toJSON();
	expect(tree).toMatchSnapshot();
});

it("updates component style when passed a style object", () => {
	const tree = create(
		<Button style={{ color: "red", background: "white" }} text="" />
	).toJSON();
	expect(tree).toMatchSnapshot();
});

it("calls the clickHandler function when user clicks on button", () => {
	let component;
	act(() => {
		component = create(<Button clickHandler={() => "clicked"} text="" />);
	});

	const instance = component.root;
	const button = instance.findByType("button");
	let result;
	act(() => {
		result = button.props.onClick();
	});
	expect(result).toBe("clicked");
});
