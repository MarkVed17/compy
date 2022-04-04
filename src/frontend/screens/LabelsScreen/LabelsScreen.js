import React from "react";
import { Sidebar } from "../../components";
import "./LabelsScreen.css";

const LabelsScreen = () => {
  return (
    <div className="labels-container">
      <Sidebar />
      <div
        className="main-content"
        style={{ color: "white", marginTop: "10rem", textAlign: "center" }}
      >
        Labels Screen
      </div>
    </div>
  );
};

export { LabelsScreen };
