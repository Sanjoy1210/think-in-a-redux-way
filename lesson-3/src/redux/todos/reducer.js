import initialState from "./initialState";
import {ADDED, ALL_COMPLETED, CLEAR_COMPLETED, COLOR_SELECTED, DELETED, TOGGLED} from "./actionTypes";

const nextTodoId = (todos) => {
    const lastId = todos.reduce((prevId, todo) => Math.max(todo.id, prevId), 0);
    return lastId + 1;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload.text,
                    completed: false,
                }
            ];

        case DELETED:
            return state.filter(todo => todo.id !== action.payload.id);

        case TOGGLED:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                } else {
                    return todo;
                }
            });

        case COLOR_SELECTED:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        color: action.payload.color,
                    };
                } else {
                    return todo;
                }
            });

        case ALL_COMPLETED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true,
                };
            });

        case CLEAR_COMPLETED:
            return state.filter(todo => !todo.completed);

        default:
            return state;

    }
}

export default reducer;
