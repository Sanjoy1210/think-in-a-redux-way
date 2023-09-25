import {ADDED, DELETED, LOADED, UPDATED} from "./actionTypes";

export const added = (book) => {
    return {
        type: ADDED,
        payload: book,
    };
}

export const loaded = (books) => {
    return {
        type: LOADED,
        payload: books,
    };
}

export const updated = (book) => {
    return {
        type: UPDATED,
        payload: book,
    };
}

export const deleted = (id) => {
    return {
        type: DELETED,
        payload: id,
    };
}

