import React from "react";
import Sidebar from "../Components/Sidebar";
import { create, act } from "react-test-renderer";

it("renders '--Empty--' when it receive 0 notes", ()=> {
    const emptyNotes = [];
	let component;
	act(() => {
		component = create(
			<Sidebar
                notes={emptyNotes}
                currentNoteIndex={-1}
                selectNote={()=>jest.fn()}
		    />
		);
	});
	component.toJSON();
	expect(component).toMatchSnapshot();
})