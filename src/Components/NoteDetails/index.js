import React from "react";
import Button from "../Button";
import PropTypes from "prop-types";
import "./notedetails.css";

const NoteDetails = ({ note = {}, toggleReadStatus }) => {
	const { subject, body, read } = note;
	return subject && body && typeof read === "boolean" ? (
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

NoteDetails.propTypes = {
	note: PropTypes.shape({
		subject: PropTypes.string,
		body: PropTypes.string,
		read: PropTypes.bool,
	}),
	toggleReadStatus: PropTypes.func.isRequired,
};

export default NoteDetails;
