import {updated} from "../actions";

const updateABook = (id, updatedData) => {
    return async (dispatch) => {
        const res = await fetch(`https://fake-json-data.onrender.com/books/${id}`, {
            method: "PATCH",
            body: JSON.stringify(updatedData),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });
        const book = await res.json();

        dispatch(updated(book));
    }
}

export default updateABook;
