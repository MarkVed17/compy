import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  NotesProvider,
  ArchivesProvider,
  FiltersProvider,
} from "./frontend/contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NotesProvider>
          <ArchivesProvider>
            <FiltersProvider>
              <App />
            </FiltersProvider>
          </ArchivesProvider>
        </NotesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
