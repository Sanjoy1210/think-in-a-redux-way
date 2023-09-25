import {ADDED, ALL_COMPLETED, CLEAR_COMPLETED, COLOR_SELECTED, DELETED, LOADED, TOGGLED} from "./actionTypes";

export const loaded = (todos) => {
    return {
        type: LOADED,
        payload: todos,
    };
}

export const added = (text) => {
    return {
        type: ADDED,
        payload: {
            text,
        }
    };
}

export const deleted = (id) => {
    return {
        type: DELETED,
        payload: {
            id
        }
    };
}

export const toggled = (id) => {
    return {
        type: TOGGLED,
        payload: {
            id
        }
    };
}

export const colorSelected = (id, color) => {
    return {
        type: COLOR_SELECTED,
        payload: {
            id,
            color
        }
    }
}

export const allCompleted = () => {
    return {
        type: ALL_COMPLETED,
    }
}

export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED,
    }
}
