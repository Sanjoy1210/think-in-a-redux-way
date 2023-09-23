import Navbar from "./components/Navbar";
import ProductsContainer from "./components/ProductsContainer";
import AddProductForm from "./components/AddProductForm";
import ShoppingCartContainer from "./components/ShoppingCartContainer";
import Route from "./components/Route.jsx";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <Navbar />
            <main className="py-16">
                <Route path="/">
                    <div className="productWrapper">
                        <ProductsContainer />
                        <AddProductForm />
                    </div>
                </Route>
                <Route path="/cart">
                    <ShoppingCartContainer />
                </Route>
            </main>
        </Provider>
    )
}

export default App
