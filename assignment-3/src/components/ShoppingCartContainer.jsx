import BillDetails from "./BillDetails";
import CartItem from "./CartItem";
import {useSelector} from "react-redux";

function ShoppingCartContainer(props) {
    const cart = useSelector((state) => state.cart);

    return (
        <div className="container 2xl:px-8 px-2 mx-auto">
            <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
                <div className="cartListContainer">
                    {
                        cart?.length === 0 ? (
                            <p>No cart item found</p>
                        ) : (
                            <div className="space-y-6">
                                {
                                    cart.map(item => <CartItem key={item?.id} {...item} />)
                                }
                            </div>
                        )
                    }

                    <BillDetails />
                </div>
        </div>
    );
}

export default ShoppingCartContainer;