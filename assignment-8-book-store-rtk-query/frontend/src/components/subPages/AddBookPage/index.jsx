import { Error, FormCheckbox, FormInput } from '@components/reusable';
import { useAddBookMutation } from '@rtk/features/api/apiSlice';
import { setFeatured } from '@rtk/features/filters/filtersSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function AddBookPage() {
  const [values, setValues] = useState({
    name: '',
    author: '',
    thumbnail: '',
    price: '',
    rating: '',
    featured: false,
  });

  const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      name === 'price' || name === 'rating'
        ? e.target.valueAsNumber
        : name === 'featured'
        ? e.target.checked
        : e.target.value;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(values);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setFeatured('all'));
      navigate('/');
    }
  }, [isSuccess, navigate, dispatch]);

  return (
    <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form className="book-form" onSubmit={handleSubmit}>
        <FormInput
          id="lws-bookName"
          name="name"
          label="Book Name"
          value={values.name}
          onChange={handleChange}
        />
        <FormInput
          id="lws-author"
          name="author"
          label="Author"
          value={values.author}
          onChange={handleChange}
        />
        <FormInput
          id="lws-thumbnail"
          name="thumbnail"
          label="Image Url"
          value={values.thumbnail}
          onChange={handleChange}
        />
        <div className="grid grid-cols-2 gap-8 pb-4">
          <FormInput
            id="lws-price"
            name="price"
            label="Price"
            type="number"
            step={0.01}
            min={0}
            value={values.price}
            onChange={handleChange}
          />
          <FormInput
            id="lws-rating"
            name="rating"
            label="Rating"
            type="number"
            value={values.rating}
            onChange={handleChange}
          />
        </div>

        <FormCheckbox
          label="This is a featured book"
          id="lws-featured"
          name="featured"
          value={values.featured}
          onChange={handleChange}
        />

        <button type="submit" className="submit" id="lws-submit">
          Add Book
        </button>

        {!isLoading && isError && (
          <Error message="There was an error occurred adding new book!" />
        )}
      </form>
    </div>
  );
}
