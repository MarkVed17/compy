import React from "react";
import {
  TITLE,
  PINNED,
  LABEL,
  CONTENT,
  COLOR,
  RESET,
} from "../constants/noteConstants";

export const noteDetailsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case TITLE:
      return { ...state, title: payload };
    case PINNED:
      return { ...state, isPinned: !state.isPinned };
    case LABEL:
      return { ...state, label: payload };
    case CONTENT:
      return { ...state, content: payload };
    case COLOR:
      return { ...state, color: payload };
    case RESET:
      return payload;
    default:
      return state;
  }
};
