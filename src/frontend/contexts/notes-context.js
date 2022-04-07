import React, { createContext, useContext, useState, useEffect } from "react";
import { getNotesService } from "../services";
import { useAuth } from "./auth-context";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const { auth } = useAuth();

  useEffect(() => {
    if (auth.status) {
      (async () => {
        const response = await getNotesService(auth.token);
        if (response !== undefined) {
          setNotes(response);
        }
      })();
    } else {
      setNotes([]);
    }
  }, [auth]);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => {
  const context = useContext(NotesContext);

  if (context === undefined) {
    throw new Error("useNotes must be used within a NotesProvider");
  }

  return context;
};

export { NotesProvider, useNotes };
