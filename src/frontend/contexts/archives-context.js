import React, { createContext, useContext, useState, useEffect } from "react";
import { getArchiveNotesService } from "../services";
import { useAuth } from "./auth-context";

const ArchivesContext = createContext();

const ArchivesProvider = ({ children }) => {
  const [archives, setArchives] = useState([]);

  const { auth } = useAuth();

  useEffect(() => {
    if (auth.status) {
      (async () => {
        const response = await getArchiveNotesService(auth.token);
        if (response !== undefined) {
          setArchives(response);
        }
      })();
    } else {
      setArchives([]);
    }
  }, [auth]);

  return (
    <ArchivesContext.Provider value={{ archives, setArchives }}>
      {children}
    </ArchivesContext.Provider>
  );
};

const useArchives = () => {
  const context = useContext(ArchivesContext);

  if (context === undefined) {
    throw new Error("useArchives must be used within a ArchivesProvider");
  }

  return context;
};

export { ArchivesProvider, useArchives };
