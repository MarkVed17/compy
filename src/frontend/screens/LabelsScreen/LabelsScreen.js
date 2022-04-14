import React from "react";
import { Sidebar, NoteCard } from "../../components";
import { useNotes } from "../../contexts";
import "./LabelsScreen.css";

const LabelsScreen = () => {
  const { notes, setNotes } = useNotes();
  const labelOneNotes = notes
    .filter(
      (note) =>
        note.label === "Label 1" &&
        note.isPinned === true &&
        note.trash === false
    )
    .concat(
      notes.filter(
        (note) =>
          note.label === "Label 1" &&
          note.isPinned === false &&
          note.trash === false
      )
    );
  const labelTwoNotes = notes
    .filter(
      (note) =>
        note.label === "Label 2" &&
        note.isPinned === true &&
        note.trash === false
    )
    .concat(
      notes.filter(
        (note) =>
          note.label === "Label 2" &&
          note.isPinned === false &&
          note.trash === false
      )
    );
  return (
    <div className="labels-container">
      <Sidebar />
      <div className="labelled-notes-list">
        {labelTwoNotes.length || labelOneNotes.length > 0 ? (
          <div>
            {labelOneNotes.length > 0 && (
              <div>
                <h1 className="labelled-list-title">Label 1 Notes :</h1>
                {labelOneNotes.map((note) => (
                  <NoteCard key={note._id} note={note} setNotes={setNotes} />
                ))}
              </div>
            )}

            {labelTwoNotes.length > 0 && (
              <div>
                <h1 className="labelled-list-title">Label 2 Notes :</h1>
                {labelTwoNotes.map((note) => (
                  <NoteCard key={note._id} note={note} setNotes={setNotes} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            <h1 className="labelled-list-title">
              Labeled Notes Will Be Visible Here
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export { LabelsScreen };
