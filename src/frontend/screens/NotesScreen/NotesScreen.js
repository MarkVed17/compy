import React from "react";
import { Sidebar } from "../../components";
import "./NotesScreen.css"

const NotesScreen = () => {
  return (
    <div className="notes-container">
      <Sidebar />
      <div
        className="main-content"
        style={{ color: "white", marginTop: "10rem", textAlign: "center" }}
      >
        Notes Screen
      </div>
    </div>
  );
};

export { NotesScreen };
