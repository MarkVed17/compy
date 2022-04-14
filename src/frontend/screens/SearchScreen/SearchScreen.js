import React from "react";
import { useFilters, useNotes } from "../../contexts";
import { Sidebar, NoteCard } from "../../components";
import {
  getNotesOfLabels,
  getNotesOfPriority,
  getNotesSortedByTime,
} from "../../utils";
import "./SearchScreen.css";

const SearchScreen = () => {
  const { notes, setNotes } = useNotes();
  const {
    filters: { labelFilter, priorityFilter, timeSort },
  } = useFilters();

  const sortedNotes = getNotesSortedByTime(notes, timeSort);
  const priorityFilteredNotes = getNotesOfPriority(sortedNotes, priorityFilter);
  const labelFilteredNotes = getNotesOfLabels(
    priorityFilteredNotes,
    labelFilter
  );

  return (
    <div className="search-container">
      <Sidebar />
      <div className="searched-list">
        {labelFilteredNotes.map((note) => (
          <NoteCard key={note._id} note={note} setNotes={setNotes} />
        ))}
      </div>
    </div>
  );
};

export { SearchScreen };
