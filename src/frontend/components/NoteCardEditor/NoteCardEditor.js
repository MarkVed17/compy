import React, { useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { NEW_CONTENT } from "../../constants/noteEditConstants";

export const modules = {
  toolbar: {
    container: "#note-card-editor-toolbar",
  },
};

export const formats = [
  "bold",
  "italic",
  "underline",
  "strike",
  "script",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "code-block",
];

const NoteCardEditor = ({ content, setValue }) => {

  const textEditor = useRef(null);

  useEffect(() => {
    if (textEditor.current) {
      textEditor.current.focus();
    }
  }, []);

  return (
    <div className="rich-text-editor-container">
      <div id="note-card-editor-toolbar">
        <span className="ql-formats">
          <button className="ql-bold" />
          <button className="ql-italic" />
          <button className="ql-underline" />
          <button className="ql-strike" />
        </span>
        <span className="ql-formats">
          <button className="ql-list" value="ordered" />
          <button className="ql-list" value="bullet" />
          <button className="ql-blockquote" />
          <button className="ql-code-block" />
        </span>
        <span className="ql-formats">
          <button className="ql-link" />
          <button className="ql-image" />
          <button className="ql-video" />
        </span>
      </div>

      <ReactQuill
        theme="snow"
        value={content}
        onChange={(value) => setValue({ type: NEW_CONTENT, payload: value })}
        placeholder="Start writing here..."
        modules={modules}
        formats={formats}
        ref={textEditor}
      />
    </div>
  );
};

export { NoteCardEditor };
