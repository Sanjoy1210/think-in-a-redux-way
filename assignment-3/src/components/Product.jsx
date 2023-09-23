import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/actions";
import {decrementProductQuantity} from "../redux/products/actions";

function Product({ id, title, category, price, quantity, image }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        if (quantity > 0) {
            dispatch(addToCart({
                id,
                title,
                category,
                price,
                stock: quantity,
                image
            }));
            dispatch(decrementProductQuantity(id));
        }
    }

    return (
        <div className="lws-productCard">
            <img className="lws-productImage" src={image} alt="product" />
            <div className="p-4 space-y-2">
                <h4 className="lws-productName">
                    {title}
                </h4>
                <p className="lws-productCategory">
                    {category}
                </p>
                <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">
                        BDT <span className="lws-price">{price}</span>
                    </p>
                    <p className="productQuantity">
                        QTY <span className="lws-quantity">{quantity}</span>
                    </p>
                </div>
                <button
                    disabled={quantity <= 0}
                    className="lws-btnAddToCart"
                    onClick={handleAddToCart}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
}

export default Product;