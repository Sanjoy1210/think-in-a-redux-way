import {BOOK, DELETE_BOOK} from "./actionTypes";

export const addBook = (payload) => {
    return {
        type: BOOK,
        payload
    };
}

export const deleteBook = (id) => {
    return {
        type: DELETE_BOOK,
        payload: {
            id
        }
    };
}
