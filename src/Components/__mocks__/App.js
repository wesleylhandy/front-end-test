import React, { Component } from "react";
import { AppContext } from "../../Context/__mocks__/AppProvider";
import Header from "../Header";
import Sidebar from "../Sidebar";
import NoteDetails from "../NoteDetails";
import ErrorBoundary from "../ErrorBoundary";

import "../app.css";

class App extends Component {
	static contextType = AppContext;

	componentDidMount() {
		this.context.getNotes();
	}

	render() {
		const {
			notes,
			toggleReadStatus,
			selectNote,
			currentNoteIndex,
		} = this.context;
		const currentNote =
			notes.length && currentNoteIndex > -1 ? notes[currentNoteIndex] : {};
		const unreadCount = notes.reduce(
			(count, { read }) => (read ? count : count + 1),
			0
		);
		return (
			<ErrorBoundary>
				<div className="App">
					<Header unreadCount={unreadCount} />
					<Sidebar
						notes={notes}
						selectNote={selectNote}
						currentNoteIndex={currentNoteIndex}
					/>
					<NoteDetails note={currentNote} toggleReadStatus={toggleReadStatus} />
				</div>
			</ErrorBoundary>
		);
	}
}

export default App;
