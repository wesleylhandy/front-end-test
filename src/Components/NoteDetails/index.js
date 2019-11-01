import React from "react";
import "./notedetails.css";

const NoteDetails = ({ note, markAsRead }) => {
	const { subject, body } = note;
	// decision to be made whether or not to display anything if some data is missing
	return subject || body ? (
		<section className="NoteDetails">
			{/* TODO some rendering bugs in here when list is empty */}
			<h3 className="NoteDetails__title">{subject}</h3>
			<p className="NoteDetails__subject">{body}</p>
			<button onClick={markAsRead}>Mark as read</button>
		</section>
	) : null;
};

export default NoteDetails;
