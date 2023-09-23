import {ADD_TO_CART, DECREMENT_QUANTITY, DELETE_ITEM, INCREMENT_QUANTITY} from "./actionTypes";

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: {
            product,
        }
    };
}

export const incrementCartItemQuantity = (id) => {
    return {
        type: INCREMENT_QUANTITY,
        payload: {
            id,
        }
    };
}

export const decrementCartItemQuantity = (id) => {
    return {
        type: DECREMENT_QUANTITY,
        payload: {
            id,
        }
    };
}

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: {
            id,
        },
    };
}
