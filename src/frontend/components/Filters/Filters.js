import React from "react";
import { useFilters } from "../../contexts";
import {
  PRIORITY_FILTER,
  LABELS_FILTER,
  RESET,
  HIGH,
  MEDIUM,
  LOW,
  TIME_SORT,
} from "../../constants/filtersConstants";
import "./Filters.css";

const Filters = () => {
  const { dispatchFilters } = useFilters();

  return (
    <div className="filter-dropdown" autoFocus>
      <h3
        className="filter-heading filter-reset"
        onClick={() => dispatchFilters({ type: RESET })}
      >
        Reset Filters
      </h3>
      <div className="filter-selections">
        <div className="filter-labels">
          <h3 className="filter-heading">Label</h3>
          <label className="filter-input-label">
            <input
              type="radio"
              name="label"
              onChange={() =>
                dispatchFilters({ type: LABELS_FILTER, payload: "LABEL 1" })
              }
            />
            Label 1
          </label>
          <label className="filter-input-label">
            <input
              type="radio"
              name="label"
              onChange={() =>
                dispatchFilters({ type: LABELS_FILTER, payload: "LABEL 2" })
              }
            />
            Label 2
          </label>
        </div>
        <div className="filter-priority flex--column">
          <h3 className="filter-heading">Priority</h3>
          <label className="filter-input-label">
            <input
              type="radio"
              name="priority"
              onChange={() =>
                dispatchFilters({ type: PRIORITY_FILTER, payload: HIGH })
              }
            />
            High
          </label>
          <label className="filter-input-label">
            <input
              type="radio"
              name="priority"
              onChange={() =>
                dispatchFilters({ type: PRIORITY_FILTER, payload: MEDIUM })
              }
            />
            Medium
          </label>
          <label className="filter-input-label">
            <input
              type="radio"
              name="priority"
              onChange={() =>
                dispatchFilters({ type: PRIORITY_FILTER, payload: LOW })
              }
            />
            Low
          </label>
        </div>
        <div className="filter-time flex--column">
          <h3 className="filter-heading">Time</h3>
          <label className="filter-input-label">
            <input
              type="radio"
              name="time"
              onChange={() =>
                dispatchFilters({ type: TIME_SORT, payload: "old-to-new" })
              }
            />
            Old to New
          </label>
          <label className="filter-input-label">
            <input
              type="radio"
              name="time"
              onChange={() =>
                dispatchFilters({ type: TIME_SORT, payload: "new-to-old" })
              }
            />
            New to Old
          </label>
        </div>
      </div>
    </div>
  );
};

export { Filters };
