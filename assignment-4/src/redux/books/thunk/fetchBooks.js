import {loaded} from "../actions";

const fetchBooks = async (dispatch) => {
    const res = await fetch("https://fake-json-data.onrender.com/books");
    const books = await res.json();

    dispatch(loaded(books));
}

export default fetchBooks;
