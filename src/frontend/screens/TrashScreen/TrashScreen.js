import React from "react";
import { Sidebar } from "../../components";
import "./TrashScreen.css";

const TrashScreen = () => {
  return (
    <div className="trash-container">
      <Sidebar />
      <div
        className="main-content"
        style={{ color: "white", marginTop: "10rem", textAlign: "center" }}
      >
        Trash Screen
      </div>
    </div>
  );
};

export { TrashScreen };
