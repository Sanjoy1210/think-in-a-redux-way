import {ADDED, DELETED, LOADED, UPDATED} from "./actionTypes";
import initialState from "./initialState";

const nextMaxId = (state) => {
    const maxId = state.reduce((mxId, item) => Math.max(mxId, item.id), 0);
    return maxId + 1;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADED:
            return [...action.payload];

        case ADDED:
            return [
                ...state,
                {
                    id: state[state.length - 1].id + 1,
                    ...action.payload,
                }
            ];

        case UPDATED:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return {...item};
            });

        case DELETED:
            return state.filter(item => item.id !== action.payload);

        default:
            return state;
    }
}

export default reducer;
