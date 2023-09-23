import {ADD_PRODUCT, DECREMENT_QUANTITY, INCREMENT_QUANTITY} from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [
                ...state,
                {
                    id: Date.now(),
                    ...action.payload?.product,
                },
            ];

        case INCREMENT_QUANTITY:
            return state?.map(product => {
                if (product?.id === action?.payload.id) {
                    return {
                        ...product,
                        quantity: product?.quantity + action?.payload?.quantity,
                    };
                } else {
                    return product;
                }
            });

        case DECREMENT_QUANTITY:
            return state?.map(product => {
                if (product?.id === action?.payload?.id) {
                    return {
                        ...product,
                        quantity: product?.quantity - 1,
                    };
                } else {
                    return product;
                }
            });

        default:
            return state;

    }
}

export default reducer;
