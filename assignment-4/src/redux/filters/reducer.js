import initialState from "./initialState";
import {SEARCH, STATUS_SELECTED} from "./actionTypes";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                search: action.payload,
            };

        case STATUS_SELECTED:
            return {
                ...state,
                status: action.payload,
            };   

        default:
            return state;
    }
}

export default reducer;
