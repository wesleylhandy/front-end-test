import React from "react";
import Button from "../Button";
import "./notedetails.css";

const NoteDetails = ({ note, toggleReadStatus }) => {
	const { subject, body, read } = note;
	// decision to be made whether or not to display anything if some data is missing
	return subject || body ? (
		<section className="NoteDetails">
			<h3 className="NoteDetails__title">{subject}</h3>
			<p className="NoteDetails__subject">{body}</p>
			<Button
				className="NoteDetails__button"
				clickHandler={toggleReadStatus}
				text={`Mark as ${read ? "unread" : "read"}`}
			/>
		</section>
	) : null;
};

export default NoteDetails;
