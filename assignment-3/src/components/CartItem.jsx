import {useDispatch} from "react-redux";
import {decrementCartItemQuantity, deleteItem, incrementCartItemQuantity} from "../redux/cart/actions";
import {decrementProductQuantity, incrementProductQuantity} from "../redux/products/actions.js";

function CartItem({ id, title, category, image, quantity, price, stock }) {
    const dispatch = useDispatch();

    const handleRemoveFromCart = () => {
        dispatch(deleteItem(id));
        dispatch(incrementProductQuantity(id, quantity));
    }

    const handleIncrementCartItem = () => {
        dispatch(incrementCartItemQuantity(id));
        dispatch(decrementProductQuantity(id));
    }

    const handleDecrementCartItem = () => {
        dispatch(decrementCartItemQuantity(id));
        dispatch(incrementProductQuantity(id, 1));
    }

    return (
        <div className="cartCard">
            <div className="flex items-center col-span-6 space-x-6">

                <img className="lws-cartImage" src={image} alt={title} />

                <div className="space-y-2">
                    <h4 className="lws-cartName">
                        {title}
                    </h4>
                    <p className="lws-cartCategory">
                        {category}
                    </p>
                    <p>
                        BDT <span className="lws-cartPrice">{price}</span>
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">

                <div className="flex items-center space-x-4">
                    <button
                        disabled={stock <= 0}
                        className="lws-incrementQuantity"
                        onClick={handleIncrementCartItem}
                    >
                        <i className="text-lg fa-solid fa-plus"></i>
                    </button>
                    <span className="lws-cartQuantity">
                        {quantity}
                    </span>
                    <button
                        disabled={quantity <= 0}
                        className="lws-decrementQuantity"
                        onClick={handleDecrementCartItem}
                    >
                        <i className="text-lg fa-solid fa-minus"></i>
                    </button>
                </div>

                <p className="text-lg font-bold">
                    BDT <span className="lws-calculatedPrice">{price * quantity}</span>
                </p>
            </div>

            <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button className="lws-removeFromCart" onClick={handleRemoveFromCart}>
                    <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
}

export default CartItem;