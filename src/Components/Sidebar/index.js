import React from "react";
import checkMark from "../../SVG/check-mark.svg";
import classNames from "classnames";
import "./sidebar.css";

const Sidebar = ({ notes = [], currentNoteIndex, selectNote }) => (
	<section className="NotesSidebar">
		<h2 className="NotesSidebar__title">Available Notes:</h2>
		<div className="NotesSidebar__list">
			{notes.length ? (
				notes.map(({ subject, read }, idx) => (
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
				))
			) : (
				<div className="NotesSidebarItem empty">--Empty--</div>
			)}
		</div>
	</section>
);

export default Sidebar;
