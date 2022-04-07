import React from "react";
import { useAuth, useNotes } from "../../contexts";
import {
  restoreArchiveNoteService,
  deleteArchiveNoteService,
} from "../../services";

const ArchiveNoteCard = ({ note, setArchives }) => {
  const { _id, title, label, content, color } = note;

  const { auth } = useAuth();
  const { setNotes } = useNotes();

  const restoreHandler = async () => {
    const response = await restoreArchiveNoteService(auth.token, _id);
    if (response !== undefined) {
      setArchives(response.archives);
      setNotes(response.notes);
    }
  };

  const deleteHandler = async () => {
    const response = await deleteArchiveNoteService(auth.token, _id);
    if (response !== undefined) {
      setArchives(response);
    }
  };

  return (
    <div className={`note-card-container ${color}`}>
      <div className="title-wrapper">
        <h1 className="note-card-title">{title}</h1>
      </div>
      <p
        className="note-card-content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>

      {label && <div className="note-card-label">{label}</div>}

      <div className="attributes-wrapper">
        <div className="attributes-actions">
          <span
            className="material-icons attributes-icon"
            title="Restore Note"
            onClick={() => restoreHandler()}
          >
            unarchive
          </span>
          <span
            className="material-icons attributes-icon"
            title="Delete Note"
            onClick={() => deleteHandler(_id)}
          >
            delete_forever
          </span>
        </div>
      </div>
    </div>
  );
};

export { ArchiveNoteCard };
