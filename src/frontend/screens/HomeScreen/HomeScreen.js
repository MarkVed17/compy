import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div
      className="main-content"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", color: "white", marginTop: "10rem" }}
    >
      <p>Home Screen</p>
      <Link
        to="/notes"
        style={{
          color: "black",
          border: "1px solid yellow",
          padding: "8px",
          width: "fit-content",
          textDecoration: "none",
          backgroundColor: "yellow"
        }}
      >
        Go to Notes
      </Link>
    </div>
  );
};

export { HomeScreen };
