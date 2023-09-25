import { added } from "../actions";

const addBook = (bookObj) => {
  return async (dispatch) => {
    const res = await fetch("https://fake-json-data.onrender.com/books", {
      method: "POST",
      body: JSON.stringify(bookObj),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    });

    const book = await res.json();

    dispatch(added(book));
  }
}

export default addBook;
