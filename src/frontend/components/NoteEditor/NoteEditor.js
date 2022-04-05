import React, { useState } from "react";
import { RichTextEditor } from "../RichTextEditor/RichTextEditor";
import "./NoteEditor.css";

const NoteEditor = () => {
  const [colorMenu, setColorMenu] = useState(false);
  const [labelMenu, setLabelMenu] = useState(false);

  return (
    <div className="note-editor-container">
      <div className="title-wrapper">
        <input type="text" className="title-input" placeholder="Title" />
        <span className="material-icons attribues-icon unpinned">push_pin</span>
      </div>
      <RichTextEditor />
      <div className="attributes-wrapper">
        <div className="attributes-actions">
          <span
            className="material-icons attribues-icon"
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
              <div className="color-1"></div>
              <div className="color-2"></div>
              <div className="color-3"></div>
            </div>
          )}

          <span
            className="material-icons attribues-icon"
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
              <div>Label 1</div>
              <div>Label 2</div>
            </div>
          )}

        </div>
        
        <button className="btn btn-brand btn-accent add-note-btn">Add</button>
      </div>
    </div>
  );
};

export { NoteEditor };
