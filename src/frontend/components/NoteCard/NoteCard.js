import React, { useState } from "react";
import { useAuth } from "../../contexts";
import { updateNoteService } from "../../services";
import "./NoteCard.css";

const NoteCard = ({ note, setNotes }) => {
  const { title, isPinned, label, content, color } = note;

  const [colorMenu, setColorMenu] = useState(false);
  const [labelMenu, setLabelMenu] = useState(false);

  const { auth } = useAuth();

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

  return (
    <div className={`note-card-container ${color}`}>
      <div className="title-wrapper">
        <h1 className="note-card-title">{title}</h1>
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
      <p
        className="note-card-content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>

      {label && (
        <div
          className="note-card-label"
          onClick={() => labelPicker("")}
        >
          {label}
        </div>
      )}

      <div className="attributes-wrapper">
        <div className="attributes-actions">
          <span
            className="material-icons attributes-icon"
            onClick={() => {
              setLabelMenu(false);
              setColorMenu(!colorMenu);
            }}
            title="Choose any color"
          >
            palette
          </span>
          {colorMenu && (
            <div className="color-palette">
              <div
                className="color-1"
                onClick={() => {
                  setColorMenu(false);
                  colorPicker("note-color-1");
                }}
              ></div>
              <div
                className="color-2"
                onClick={() => {
                  setColorMenu(false);
                  colorPicker("note-color-2");
                }}
              ></div>
              <div
                className="color-3"
                onClick={() => {
                  setColorMenu(false);
                  colorPicker("note-color-3");
                }}
              ></div>
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
              <div
                onClick={() => {
                  setLabelMenu(false);
                  labelPicker("Label 1");
                }}
              >
                Label 1
              </div>
              <div
                onClick={() => {
                  setLabelMenu(false);
                  labelPicker("Label 2");
                }}
              >
                Label 2
              </div>
            </div>
          )}
          <span
            className="material-icons attributes-icon"
            title="Move to Archive"
          >
            inventory_2
          </span>
          <span
            className="material-icons attributes-icon"
            title="Move to Trash"
          >
            delete
          </span>
        </div>
      </div>
    </div>
  );
};

export { NoteCard };
