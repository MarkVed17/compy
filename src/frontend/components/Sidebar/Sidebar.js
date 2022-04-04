import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const optionSelected = ({ isActive }) => {
    return "sidebar-link" + (isActive ? "-active" : "");
  };

  return (
    <nav className="sidebar">
      <NavLink to="/notes" className={optionSelected}>
        <span className="material-icons sidebar-link-icon">sticky_note_2</span>
        <span className="sidebar-link-text">Notes</span>
      </NavLink>
      <NavLink to="/labels" className={optionSelected}>
        <span className="material-icons sidebar-link-icon">label</span>
        <span className="sidebar-link-text">Labels</span>
      </NavLink>
      <NavLink to="/archives" className={optionSelected}>
        <span className="material-icons sidebar-link-icon">inventory_2</span>
        <span className="sidebar-link-text">Archive</span>
      </NavLink>
      <NavLink to="/trash" className={optionSelected}>
        <span className="material-icons sidebar-link-icon">delete</span>
        <span className="sidebar-link-text">Trash</span>
      </NavLink>
    </nav>
  );
};

export { Sidebar };
