import { useContext, createContext, useReducer } from "react";
import { filtersReducer, initialFilters } from "../reducers";

const FiltersContext = createContext();

const FiltersProvider = ({ children }) => {
  const [filters, dispatchFilters] = useReducer(filtersReducer, initialFilters);

  return (
    <FiltersContext.Provider value={{ filters, dispatchFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

const useFilters = () => useContext(FiltersContext);

export { FiltersProvider, useFilters };