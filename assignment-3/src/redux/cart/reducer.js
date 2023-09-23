import {ADD_TO_CART, DECREMENT_QUANTITY, DELETE_ITEM, INCREMENT_QUANTITY} from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const idx = state?.findIndex(cart => cart.id === action.payload.product.id);

            if (idx > -1) {
                state[idx].quantity += 1;
                state[idx].stock -= 1;
                return [...state];
            }
            return [
                ...state,
                {
                    ...action.payload.product,
                    quantity: 1,
                    stock: action.payload.product.stock - 1,
                },
            ];

        case INCREMENT_QUANTITY:
            return state.map(cart => {
                if (cart.id === action.payload.id) {
                    return {
                        ...cart,
                        quantity: cart.quantity + 1,
                        stock: cart.stock - 1,
                    };
                } else {
                    return cart;
                }
            });

        case DECREMENT_QUANTITY:
            return state.map(cart => {
                if (cart.id === action.payload.id) {
                    return {
                        ...cart,
                        quantity: cart.quantity - 1,
                        stock: cart.stock + 1,
                    };
                } else {
                    return cart;
                }
            });

        case DELETE_ITEM:
            const updatedCart = state.filter(cart => cart.id !== action.payload.id);
            return updatedCart;

        default:
            return state;
    }
}

export default reducer;
