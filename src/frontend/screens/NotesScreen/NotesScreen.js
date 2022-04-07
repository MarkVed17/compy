import React from "react";
import {
  NoteEditor,
  NotesList,
  PinnedNotesList,
  Sidebar,
} from "../../components";
import "./NotesScreen.css";

const NotesScreen = () => {
  return (
    <div className="notes-container">
      <Sidebar />
      <div className="notes-main-container">
        <div className="notes-list-wrapper">
          <NoteEditor />
          <NotesList />
        </div>
        <div className="notes-pinned-list">
          <PinnedNotesList />
        </div>
      </div>
    </div>
  );
};

export { NotesScreen };
