import {useState} from "react";
import {useDispatch} from "react-redux";
import {addProduct} from "../redux/products/actions";

function AddProductForm() {
    const dispatch = useDispatch();

    const [productInputs, setProductInputs] = useState({
        title: "",
        category: "",
        image: "",
        price: 0,
        quantity: 0,
    });

    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        if (name === "price" || name === "quantity") {
            value = e.target.valueAsNumber;
        }

        setProductInputs((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct(productInputs));

        setProductInputs({
            title: "",
            category: "",
            image: "",
            price: 0,
            quantity: 0,
        });
    }

    return (
        <div>
            <div className="formContainer">
                <h4 className="formTitle">Add New Product</h4>
                <form
                    className="space-y-4 text-[#534F4F]"
                    id="lws-addProductForm"
                    onSubmit={handleSubmit}
                >

                    <div className="space-y-2">
                        <label htmlFor="lws-inputName">Product Name</label>
                        <input
                            className="addProductInput"
                            id="lws-inputName"
                            name="title"
                            type="text"
                            value={productInputs.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="lws-inputCategory">Category</label>
                        <input
                            className="addProductInput"
                            id="lws-inputCategory"
                            name="category"
                            type="text"
                            value={productInputs.category}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="lws-inputImage">Image Url</label>
                        <input
                            className="addProductInput"
                            id="lws-inputImage"
                            name="image"
                            type="text"
                            value={productInputs.image}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-8 pb-4">
                        <div className="space-y-2">
                            <label htmlFor="ws-inputPrice">Price</label>
                            <input
                                className="addProductInput"
                                type="number"
                                id="lws-inputPrice"
                                name="price"
                                min={0}
                                value={productInputs.price}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="lws-inputQuantity">Quantity</label>
                            <input
                                className="addProductInput"
                                type="number"
                                id="lws-inputQuantity"
                                name="quantity"
                                min={0}
                                value={productInputs.quantity}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        id="lws-inputSubmit"
                        className="submit"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddProductForm;
