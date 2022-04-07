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
            <h1>Archived Notes Will Be Visible Here</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export { ArchivesScreen };
