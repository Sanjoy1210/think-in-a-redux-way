import initialState from "./initialState";
import {COLOR_CHANGED, STATUS_CHANGED} from "./actionTypes";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUS_CHANGED:
            return {
                ...state,
                status: action.payload.status,
            };

        case COLOR_CHANGED:
            switch (action.payload.changeType) {
                case "added":
                    return {
                        ...state,
                        colors: [
                            ...state.colors,
                            action.payload.color,
                        ]
                    };

                case "removed":
                    return {
                        ...state,
                        colors: state.colors.filter(existingColor => existingColor !== action.payload.color),
                    };

                default:
                    return state;
            }

        default:
            return state;
    }
}

export default reducer;
