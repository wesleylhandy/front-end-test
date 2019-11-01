import React, { Component } from "react";
import { callApi } from "../Utils/fetch";

export const AppContext = React.createContext();

const ADD_NOTES = "ADD_NOTES";
const SELECT_NOTE = "SELECT_NOTE";
const MARK_AS_READ = "MARK_AS_READ";

const reducer = (state, action) => {
	const { type, notes, currentNoteIndex } = action;
	switch (type) {
		case ADD_NOTES:
			return {
				...state,
				notes,
			};
		case SELECT_NOTE:
			return {
				...state,
				currentNoteIndex,
			};
		case MARK_AS_READ:
			const notesState = [...state.notes];
			notesState[state.currentNoteIndex].read = true;
			return {
				...state,
				notes: notesState,
			};
		default:
			return { ...state };
	}
};

class AppProvider extends Component {
	state = {
		notes: [],
		currentNoteIndex: -1,
		getNotes: async () => {
			try {
                const notes = await callApi("/notes", { method: "GET" });
				this.setState(state => reducer(state, { type: ADD_NOTES, notes }));
			} catch (e) {
				console.error({ e });
				// show alert???
			}
		},
		selectNote: idx => {
			this.setState(state =>
				reducer(state, { type: SELECT_NOTE, currentNoteIndex: idx })
			);
		},
		markAsRead: () => {
			// this function is called by NoteDetails, which displays the currentNoteIndex
			// so this should only mark as read the current note index
			this.setState(state => reducer(state, { type: MARK_AS_READ }));
		},
	};
	render() {
		const {
			state,
			props: { children },
		} = this;
		return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
	}
}

export default AppProvider;
