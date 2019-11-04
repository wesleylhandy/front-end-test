import React, { Component } from "react";
const fetchMock = require("fetch-mock");

import { callApi } from "../../Utils/fetch";
import testBody from "../../../db.json";

export const AppContext = React.createContext();

const ADD_NOTES = "ADD_NOTES";
const SELECT_NOTE = "SELECT_NOTE";
const TOGGLE_READ_STATUS = "TOGGLE_READ_STATUS";

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
		case TOGGLE_READ_STATUS:
			const notesState = [...state.notes];
			notesState[state.currentNoteIndex].read = !notesState[
				state.currentNoteIndex
			].read;
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
				fetchMock.get("http://fake.com", testBody.notes);
                const notes = await callApi("http://fake.com", { method: "GET" });
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
		toggleReadStatus: () => {
			// this function is called by NoteDetails, which displays the currentNoteIndex
			// so this should only mark as read the current note index
			this.setState(state => reducer(state, { type: TOGGLE_READ_STATUS }));
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
