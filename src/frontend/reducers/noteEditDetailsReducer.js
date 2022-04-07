import {
  TITLE_TOGGLE,
  NEW_TITLE,
  CONTENT_TOGGLE,
  NEW_CONTENT,
  COLOR_MENU,
  LABEL_MENU,
} from "../constants/noteEditConstants";

export const noteEditDetailsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case TITLE_TOGGLE:
      return { ...state, titleToggle: payload };
    case NEW_TITLE:
      return { ...state, newTitle: payload };
    case CONTENT_TOGGLE:
      return { ...state, contentToggle: payload };
    case NEW_CONTENT:
      return { ...state, newContent: payload };
    case COLOR_MENU:
      return { ...state, colorMenu: payload };
    case LABEL_MENU:
      return { ...state, labelMenu: payload };

    default:
      return state;
  }
};
