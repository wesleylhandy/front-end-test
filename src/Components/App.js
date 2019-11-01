import React, { Component } from "react";
import { AppContext } from "../Context/AppProvider";
import Header from "./Header";
import Sidebar from "./Sidebar";
import NoteDetails from "./NoteDetails";

class App extends Component {
	static contextType = AppContext;

	componentWillMount() {
		this.context.getNotes();
	}

	render() {
		const { notes, markAsRead, selectNote, currentNoteIndex } = this.context;
		const currentNote =
			notes.length && currentNoteIndex > -1 ? notes[currentNoteIndex] : {};
		const unreadCount = notes.reduce((count, {read}) => read ? count : count + 1, 0);
		return (
			<div className="App">
				<Header unreadCount={unreadCount} />
				<Sidebar
					notes={notes}
					selectNote={selectNote}
					currentNoteIndex={currentNoteIndex}
				/>
				<NoteDetails note={currentNote} markAsRead={markAsRead} />
			</div>
		);
	}
}

export default App;
