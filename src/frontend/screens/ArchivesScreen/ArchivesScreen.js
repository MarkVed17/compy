import React from "react";
import { Sidebar } from "../../components";
import "./ArchivesScreen.css"

const ArchivesScreen = () => {
  return (
    <div className="archives-container">
      <Sidebar />
      <div
        className="main-content"
        style={{ color: "white", marginTop: "10rem", textAlign: "center" }}
      >
        Archives Screen
      </div>
    </div>
  );
};

export { ArchivesScreen };
