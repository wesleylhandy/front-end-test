import React from "react";
import checkMark from "../../SVG/check-mark.svg";
import classNames from "classnames";
import "./sidebar.css";

const getNotesRows = (notes, currentNoteIndex, selectNote) => {
	// TODO fix the selected row highlight, which breaks on subsequent clicks to the sidebar.
	return notes.map(({ subject, read }, idx) => (
		<div
			key={`note-${idx}`}
			className={classNames("NotesSidebarItem", {
				selected: idx === currentNoteIndex,
			})}
			onClick={e => selectNote(idx)}
			id={`note-${idx}`}
			role="button"
		>
			<h4 className="NotesSidebarItem__title">{subject}</h4>
			{read && <img alt="Check Mark" src={checkMark} />}
		</div>
	));
};

const Sidebar = ({ notes = [], currentNoteIndex, selectNote }) => (
	<section className="NotesSidebar">
		<h2 className="NotesSidebar__title">Available Notes:</h2>
		<div className="NotesSidebar__list">
			{notes.length && getNotesRows(notes, currentNoteIndex, selectNote)}
		</div>
	</section>
);

export default Sidebar;
