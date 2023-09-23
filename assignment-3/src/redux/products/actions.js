import {ADD_PRODUCT, DECREMENT_QUANTITY, INCREMENT_QUANTITY} from "./actionTypes";

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: {
            product,
        },
    };
}

export const incrementProductQuantity = (id, quantity) => {
    return {
        type: INCREMENT_QUANTITY,
        payload: {
            id,
            quantity
        }
    };
}

export const decrementProductQuantity = (id) => {
    return {
        type: DECREMENT_QUANTITY,
        payload: {
            id,
        }
    };
}
