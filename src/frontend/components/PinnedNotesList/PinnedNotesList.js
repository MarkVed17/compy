import React from "react";
import { useNotes } from "../../contexts";
import { NoteCard } from "../../components";

const PinnedNotesList = () => {
  const { notes, setNotes } = useNotes();
  const pinnedNotes = notes.filter((note) => note.isPinned);

  return (
    <>
      {pinnedNotes.length > 0 && <h1>Pinned Notes</h1>}
      {pinnedNotes.map((note) => (
        <NoteCard key={note._id} note={note} setNotes={setNotes} />
      ))}
    </>
  );
};

export { PinnedNotesList };
