export const getNotesOfLabels = (notes, filters) => {
  switch (filters) {
    case "LABEL 1":
      return notes.filter((note) => note.label === "Label 1");
    case "LABEL 2":
      return notes.filter((note) => note.label === "Label 2");
    default:
      return notes;
  }
};
