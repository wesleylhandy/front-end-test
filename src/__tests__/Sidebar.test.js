import React from "react";
import Sidebar from "../Components/Sidebar";
import { create, act } from "react-test-renderer";
import db from "../../db.json";

let currentNoteIndex = -1;
const notes = [...db.notes];
const selectNote = idx => {currentNoteIndex = idx};
const toggleReadStatus = idx => notes[idx].read = !notes[idx].read

it("renders correctly", () => {
	const tree = create(
		<Sidebar
			notes={notes}
			currentNoteIndex={currentNoteIndex}
			selectNote={selectNote}
		/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});

it("changes currentNodeIndex when a note is clicked", ()=>{
    let component;
	act(() => {
		component = create(
			<Sidebar
                notes={notes}
                currentNoteIndex={currentNoteIndex}
                selectNote={selectNote}
            />
		);
    });
    const buttons = component.root.children[0].children[1].children[0];

    for (let i = 0; i < buttons.length; i++) {
        act(()=>{
            buttons[i].props.onClick();
        })
        expect(currentNoteIndex).toBe(i);
    }
})

it("toggles read check mark when read status is toggled", ()=>{
    let component; let checkMark;
    const randomIdx = Math.floor(Math.random() * notes.length);
    const read = notes[randomIdx].read
	act(() => {
		component = create(
			<Sidebar
                notes={notes}
                currentNoteIndex={currentNoteIndex}
                selectNote={selectNote}
            />
		);
    });
    checkMark = component.root.children[0].children[1].children[randomIdx].children.length === 2
    expect(checkMark).toBe(read);
    expect(component.toJSON()).toMatchSnapshot();
    
    act(()=>{
        toggleReadStatus(randomIdx);
        component.update(<Sidebar
            notes={notes}
            currentNoteIndex={currentNoteIndex}
            selectNote={selectNote}
        />)
    })
    
    checkMark = component.root.children[0].children[1].children[randomIdx].children.length === 2
    expect(checkMark).not.toBe(read);
	expect(component.toJSON()).toMatchSnapshot();
})