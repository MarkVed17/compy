import React, { useReducer } from "react";
import { useAuth, useArchives } from "../../contexts";
import { updateNoteService, addArchiveNoteService } from "../../services";
import { noteEditDetailsReducer } from "../../reducers";
import { NoteCardEditor } from "../../components";
import {
  TITLE_TOGGLE,
  NEW_TITLE,
  CONTENT_TOGGLE,
  COLOR_MENU,
  LABEL_MENU,
} from "../../constants/noteEditConstants";
import "./NoteCard.css";

const NoteCard = ({ note, setNotes }) => {
  const { title, isPinned, label, content, color } = note;

  const noteEditDetailsInitialState = {
    colorMenu: false,
    labelMenu: false,
    titleToggle: true,
    contentToggle: true,
    newTitle: title,
    newContent: content,
  };

  const colors = ["color-1", "color-2", "color-3", "color-4"];
  const labels = ["Label 1", "Label 2"];

  const [noteEditDetails, dispatchNoteEditDetails] = useReducer(
    noteEditDetailsReducer,
    noteEditDetailsInitialState
  );

  const {
    colorMenu,
    labelMenu,
    titleToggle,
    contentToggle,
    newTitle,
    newContent,
  } = noteEditDetails;

  const { auth } = useAuth();
  const { setArchives } = useArchives();

  const titleEdit = async (newTitle) => {
    const response = await updateNoteService(auth.token, {
      ...note,
      title: newTitle,
    });
    if (response !== undefined) {
      setNotes(response);
    }
  };

  const contentEdit = async (newContent) => {
    const response = await updateNoteService(auth.token, {
      ...note,
      content: newContent,
    });
    if (response !== undefined) {
      setNotes(response);
    }
  };

  const pinToggle = async () => {
    const response = await updateNoteService(auth.token, {
      ...note,
      isPinned: !note.isPinned,
    });
    if (response !== undefined) {
      setNotes(response);
    }
  };

  const colorPicker = async (newColor) => {
    const response = await updateNoteService(auth.token, {
      ...note,
      color: newColor,
    });
    if (response !== undefined) {
      setNotes(response);
    }
  };

  const labelPicker = async (newLabel) => {
    const response = await updateNoteService(auth.token, {
      ...note,
      label: newLabel,
    });
    if (response !== undefined) {
      setNotes(response);
    }
  };

  const archiveHandler = async () => {
    const response = await addArchiveNoteService(auth.token, note);
    if (response !== undefined) {
      setNotes(response.notes);
      setArchives(response.archives);
    }
  };

  const trashHandler = async () => {
    const response = await updateNoteService(auth.token, {
      ...note,
      isPinned: false,
      trash: true,
    });
    if (response !== undefined) {
      setNotes(response);
    }
  };

  const handleContentEditBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      dispatchNoteEditDetails({ type: CONTENT_TOGGLE, payload: true });
    }
  };

  return (
    <div className={`note-card-container ${color}`}>
      <div className="title-wrapper">
        {titleToggle ? (
          <h1
            className="note-card-title"
            onClick={() =>
              dispatchNoteEditDetails({ type: TITLE_TOGGLE, payload: false })
            }
          >
            {newTitle}
          </h1>
        ) : (
          <input
            type="text"
            className="title-input"
            // placeholder="Title"
            value={newTitle}
            autoFocus
            onBlur={() => {
              dispatchNoteEditDetails({ type: TITLE_TOGGLE, payload: true });
              titleEdit(newTitle);
            }}
            onChange={(e) =>
              dispatchNoteEditDetails({
                type: NEW_TITLE,
                payload: e.target.value,
              })
            }
          />
        )}

        <div onClick={() => pinToggle()}>
          {isPinned ? (
            <span
              className="material-icons attributes-icon pinned"
              title="Unpin"
            >
              push_pin
            </span>
          ) : (
            <span
              className="material-icons attributes-icon unpinned"
              title="Pin"
            >
              push_pin
            </span>
          )}
        </div>
      </div>

      <div
        className="flex--column note__copyContainer"
        onBlur={(e) => {
          handleContentEditBlur(e);
          contentEdit(newContent);
        }}
      >
        {contentToggle ? (
          <p
            className="note-card-content"
            dangerouslySetInnerHTML={{ __html: newContent }}
            onClick={() =>
              dispatchNoteEditDetails({ type: CONTENT_TOGGLE, payload: false })
            }
          ></p>
        ) : (
          <NoteCardEditor
            content={newContent}
            setValue={dispatchNoteEditDetails}
          />
        )}
      </div>

      {label && (
        <div className="note-card-label" onClick={() => labelPicker("")}>
          {label}
        </div>
      )}

      <div className="attributes-wrapper">
        <div className="attributes-actions">
          <span
            className="material-icons attributes-icon"
            onClick={() => {
              dispatchNoteEditDetails({
                type: COLOR_MENU,
                payload: !colorMenu,
              });
              dispatchNoteEditDetails({ type: LABEL_MENU, payload: false });
            }}
            title="Choose any color"
          >
            palette
          </span>
          {colorMenu && (
            <div className="color-palette">
              {colors.map((color) => (
                <div
                  key={color}
                  className={color}
                  onClick={() => {
                    dispatchNoteEditDetails({
                      type: COLOR_MENU,
                      payload: false,
                    });
                    colorPicker(`note-${color}`);
                  }}
                ></div>
              ))}
            </div>
          )}
          <span
            className="material-icons attributes-icon"
            onClick={() => {
              dispatchNoteEditDetails({
                type: LABEL_MENU,
                payload: !labelMenu,
              });
              dispatchNoteEditDetails({ type: COLOR_MENU, payload: false });
            }}
            title="Choose any Label"
          >
            label
          </span>
          {labelMenu && (
            <div className="labels-list">
              {labels.map((label) => (
                <div
                  key={label}
                  onClick={() => {
                    dispatchNoteEditDetails({
                      type: LABEL_MENU,
                      payload: false,
                    });
                    labelPicker(label);
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          )}
          <span
            className="material-icons attributes-icon"
            title="Move to Archive"
            onClick={() => archiveHandler()}
          >
            inventory_2
          </span>
          <span
            className="material-icons attributes-icon"
            title="Move to Trash"
            onClick={() => trashHandler()}
          >
            delete
          </span>
        </div>
      </div>
    </div>
  );
};

export { NoteCard };
