import axios from "axios";

export const addArchiveNoteService = async (token, note) => {
  try {
    const { data } = await axios.post(
      `/api/notes/archives/${note._id}`,
      { note },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
