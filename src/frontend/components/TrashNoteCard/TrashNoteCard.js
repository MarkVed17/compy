import React from "react";
import Moment from "react-moment";
import { useAuth } from "../../contexts";
import { deleteNoteService, updateNoteService } from "../../services";

const TrashNoteCard = ({ note, setNotes }) => {
  const { _id, title, label, content, color, priority, createdAt } = note;

  const { auth } = useAuth();

  const restoreHandler = async () => {
    const response = await updateNoteService(auth.token, {
      ...note,
      trash: !note.trash,
    });
    if (response !== undefined) {
      setNotes(response);
    }
  };

  const deleteHandler = async (id) => {
    const response = await deleteNoteService(auth.token, id);
    if (response !== undefined) {
      setNotes(response);
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
      <div className="note-editor-label priority-label">{priority}</div>

      <div className="attributes-wrapper">
        <div className="attributes-actions">
          <span
            className="material-icons attributes-icon"
            title="Restore Note"
            onClick={() => restoreHandler()}
          >
            restore_from_trash
          </span>
          <span
            className="material-icons attributes-icon"
            title="Delete Note"
            onClick={() => deleteHandler(_id)}
          >
            delete_forever
          </span>
        </div>
        <div className="note-moment">
          <Moment fromNow>{createdAt}</Moment>
        </div>
      </div>
    </div>
  );
};

export { TrashNoteCard };
