import Product from "./Product";
import {useSelector} from "react-redux";

function ProductsContainer() {
    const products = useSelector((state) => state.products);

    return (
        <div className="productContainer" id="lws-productContainer">
            {
                products?.length === 0 ? (
                    <p>No Product Found</p>
                ) : (
                    products?.map(product => <Product key={product?.id} {...product} />)
                )
            }
        </div>
    );
}

export default ProductsContainer;