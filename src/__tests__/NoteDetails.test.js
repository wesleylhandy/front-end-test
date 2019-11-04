import React from "react";
import NoteDetails from "../Components/NoteDetails";
import { create, act } from "react-test-renderer";

const note = {
	subject: "Lorem ipsum dolor sit amet",
	body:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non velit vehicula lacus dictum tristique. Quisque ac justo magna. Duis eu est purus. Quisque ut enim tortor. Morbi interdum risus a lorem posuere dapibus. Morbi orci est, varius sed dolor quis, efficitur scelerisque sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean at libero sapien. Morbi ultrices malesuada nisl, sit amet aliquam ipsum egestas non. Nunc at massa vel metus vestibulum fringilla in vitae est. Pellentesque eget lorem eget arcu eleifend pretium nec sed tortor. Cras tristique ex quis aliquam vulputate.",
	read: true,
};

const toggleReadStatus = () => {
	note.read = !note.read;
};

it("note object checks matchers and pass", () => {
	expect(note).toMatchSnapshot({
		subject: expect.any(String),
		body: expect.any(String),
		read: expect.any(Boolean),
	});
});

it("renders correctly", () => {
	const tree = create(
		<NoteDetails note={note} toggleReadStatus={toggleReadStatus} />
	).toJSON();
	expect(tree).toMatchSnapshot();
});

it("instance is null when note prop is empty object", () => {
	const emptyNote = {};
	let component;
	act(() => {
		component = create(
			<NoteDetails note={emptyNote} toggleReadStatus={toggleReadStatus} />
		);
	});
	component.toJSON();
	const instance = component.getInstance();
	expect(component).toMatchSnapshot();
	expect(instance).toBe(null);
});

it("toggles the read status when mark as read/unread button clicked", () => {
	let component;
	act(() => {
		component = create(
			<NoteDetails note={note} toggleReadStatus={toggleReadStatus} />
		);
	});

	const read = note.read;

	const instance = component.root;
	const button = instance.findByType("button");
	const buttonInnerText = button.props.children;

	act(() => {
		button.props.onClick();
	});
	expect(note.read).toBe(!read);
	expect(buttonInnerText).toBe("Mark as unread");
});
