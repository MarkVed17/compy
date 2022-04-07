import React from "react";
import { Sidebar, TrashNoteCard } from "../../components";
import { useNotes } from "../../contexts";
import "./TrashScreen.css";

const TrashScreen = () => {
  const { notes, setNotes } = useNotes();

  const trashedNotes = notes.filter((note) => note.trash);

  return (
    <div className="trash-container">
      <Sidebar />
      <div className="notes-trashed-wrapper">
        {trashedNotes.length > 0 ? (
          <div className="notes-trashed-list">
            <h1>Trash Notes</h1>
            {trashedNotes.map((note) => (
              <TrashNoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        ) : (
          <div>
            <h1>Trashed Notes Will Be Visible Here</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export { TrashScreen };
