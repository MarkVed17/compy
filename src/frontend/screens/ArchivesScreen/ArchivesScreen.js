import React from "react";
import { Sidebar, ArchiveNoteCard } from "../../components";
import { useArchives } from "../../contexts";
import "./ArchivesScreen.css";

const ArchivesScreen = () => {
  const { archives, setArchives } = useArchives();

  return (
    <div className="archives-container">
      <Sidebar />
      <div className="notes-archived-wrapper">
        {archives.length > 0 ? (
          <div className="notes-archived-list">
            <h1>Archived Notes</h1>
            {archives.map((note) => (
              <ArchiveNoteCard
                key={note._id}
                note={note}
                setArchives={setArchives}
              />
            ))}
          </div>
        ) : (
          <div>
            <h1>Nothing here!</h1>
            <h3>Archive any note to see something...</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export { ArchivesScreen };
