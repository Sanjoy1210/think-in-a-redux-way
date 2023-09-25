import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import addBook from "../redux/books/thunk/addBook";
import updateABook from "../redux/books/thunk/updateABook";

function BookForm({ selectedBook }) {
  const dispatch = useDispatch();
  const initialValues = {
    name: selectedBook?.book?.name ?? "",
    author: selectedBook?.book?.author ?? "",
    thumbnail: selectedBook?.book?.thumbnail ?? "",
    price: selectedBook?.book?.price ?? "",
    rating: selectedBook?.book?.rating ?? "",
    featured: selectedBook?.book?.featured ?? false,
  };
  const [inputValues, setInputValues] = useState(initialValues);

  useEffect(() => {
    selectedBook?.isEdit && setInputValues(selectedBook?.book);
  }, [selectedBook]);

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "featured") {
      value = e.target.checked;
    }
    if (name === "price" || name === "rating") {
      value = e.target.valueAsNumber;
    }
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedBook?.isEdit) {
      dispatch(updateABook(selectedBook?.book.id, inputValues));
    } else {
      dispatch(addBook(inputValues));
    }
    setInputValues({
      name: "",
      author: "",
      thumbnail: "",
      price: "",
      rating: "",
      featured: false,
    });
  };

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form className="book-form" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              value={inputValues.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              value={inputValues.author}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              value={inputValues.thumbnail}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                min="0"
                value={inputValues.price}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                value={inputValues.rating}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              checked={inputValues.featured}
              value={inputValues.featured}
              onChange={handleChange}
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              {" "}
              This is a featured book{" "}
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            {selectedBook?.isEdit ? "Update Book" : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
