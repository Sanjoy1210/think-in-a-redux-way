import {SEARCH, STATUS_SELECTED} from "./actionTypes.js";

export const search = (searchText) => {
    return {
        type: SEARCH,
        payload: searchText,
    };
}

export const statusSelected = (status) => {
    return {
        type: STATUS_SELECTED,
        payload: status,
    };
}

