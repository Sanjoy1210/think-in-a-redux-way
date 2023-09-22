import {BOOK, DELETE_BOOK} from "./actionTypes";

const initialState = {
    allBook: []
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOK:
            return {
                ...state,
                allBook: [
                    ...state.allBook,
                    action.payload
                ]
            };

        case DELETE_BOOK:
            const updatedBook = state.allBook.filter(book => book.id !== action.payload.id);
            return {
                ...state,
                allBook: updatedBook
            };

        default:
            return state;
    }
}

export default bookReducer;
