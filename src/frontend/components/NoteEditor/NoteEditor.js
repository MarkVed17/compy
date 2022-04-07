import React, { useState, useReducer } from "react";
import { useAuth, useNotes } from "../../contexts";
import { addNoteService } from "../../services";
import {
  TITLE,
  PINNED,
  LABEL,
  COLOR,
  RESET,
} from "../../constants/noteConstants";
import { noteDetailsReducer } from "../../reducers";
import { RichTextEditor } from "../RichTextEditor/RichTextEditor";
import "./NoteEditor.css";

const NoteEditor = () => {
  const noteInitialState = {
    title: "",
    isPinned: false,
    label: "",
    content: "",
    color: "note-color-4",
  };

  const colors = ["color-1", "color-2", "color-3", "color-4"];
  const labels = ["Label 1", "Label 2"];

  const [noteDetails, dispatchNoteDetails] = useReducer(
    noteDetailsReducer,
    noteInitialState
  );
  const { title, isPinned, label, content, color } = noteDetails;

  const [colorMenu, setColorMenu] = useState(false);
  const [labelMenu, setLabelMenu] = useState(false);

  const { auth } = useAuth();
  const { setNotes } = useNotes();

  const addNewNoteHandler = async () => {
    const response = await addNoteService(auth.token, {
      ...noteDetails,
    });
    if (response !== undefined) {
      setNotes(response);
      dispatchNoteDetails({ type: RESET, payload: noteInitialState });
    }
  };

  return (
    <div className={`note-editor-container ${color}`}>
      <div className="title-wrapper">
        <input
          type="text"
          className="title-input"
          placeholder="Title"
          value={title}
          onChange={(e) =>
            dispatchNoteDetails({ type: TITLE, payload: e.target.value })
          }
        />
        <div onClick={() => dispatchNoteDetails({ type: PINNED })}>
          {isPinned ? (
            <span className="material-icons attributes-icon pinned">
              push_pin
            </span>
          ) : (
            <span className="material-icons attributes-icon unpinned">
              push_pin
            </span>
          )}
        </div>
      </div>

      <RichTextEditor content={content} setValue={dispatchNoteDetails} />

      {label && (
        <div
          className="note-editor-label"
          onClick={() => dispatchNoteDetails({ type: LABEL, payload: "" })}
        >
          {label}
        </div>
      )}

      <div className="attributes-wrapper">
        <div className="attributes-actions">
          <span
            className="material-icons attributes-icon"
            onClick={() => {
              setColorMenu(!colorMenu);
              setLabelMenu(false);
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
                    setColorMenu(false);
                    dispatchNoteDetails({
                      type: COLOR,
                      payload: `note-${color}`,
                    });
                  }}
                ></div>
              ))}
            </div>
          )}

          <span
            className="material-icons attributes-icon"
            onClick={() => {
              setLabelMenu(!labelMenu);
              setColorMenu(false);
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
                    setLabelMenu(false);
                    dispatchNoteDetails({ type: LABEL, payload: `${label}` });
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          className="btn btn-brand btn-accent add-note-btn"
          onClick={() => addNewNoteHandler(noteDetails)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export { NoteEditor };
