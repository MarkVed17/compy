import {
  LABELS_FILTER,
  PRIORITY_FILTER,
  TIME_SORT,
  RESET,
} from "../constants/filtersConstants";

export const initialFilters = {
  labelFilter: "",
  priorityFilter: "",
  timeSort: "",
};

export const filtersReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case LABELS_FILTER:
      return { ...state, labelFilter: payload };
    case PRIORITY_FILTER:
      return { ...state, priorityFilter: payload };
    case TIME_SORT:
      return { ...state, timeSort: payload };
    case RESET:
      return initialFilters;
    default:
      return state;
  }
};
