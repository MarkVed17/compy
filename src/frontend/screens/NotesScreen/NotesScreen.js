import React from "react";
import { NoteEditor, Sidebar } from "../../components";
import "./NotesScreen.css"

const NotesScreen = () => {
  return (
    <div className="notes-container">
      <Sidebar />
      <NoteEditor />
    </div>
  );
};

export { NotesScreen };
