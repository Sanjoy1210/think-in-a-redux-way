import { deleted } from "../actions";

const deleteBook = (id) => {
  return async (dispatch) => {
    await fetch(`https://fake-json-data.onrender.com/books/${id}`, {
      method: "DELETE",
    });

    dispatch(deleted(id));
  };
}

export default deleteBook;
