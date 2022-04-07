import React from "react";
import { useNotes } from "../../contexts";
import { NoteCard } from "../../components";

const NotesList = () => {
  const { notes, setNotes } = useNotes();
  const normalNotes = notes.filter((note) => !note.isPinned);

  return (
    <>
      {normalNotes.map((note) => (
        <NoteCard key={note._id} note={note} setNotes={setNotes} />
      ))}
    </>
  );
};

export { NotesList };
