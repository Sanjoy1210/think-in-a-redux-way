import { Error, FormCheckbox, FormInput, Success } from '@components/reusable';
import { useUpdateBookMutation } from '@rtk/features/api/apiSlice';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form({ book = {} }) {
  const [values, setValues] = useState({
    name: book?.name || '',
    author: book?.author || '',
    thumbnail: book?.thumbnail || '',
    price: book?.price || '',
    rating: book?.rating || '',
    featured: book?.featured || false,
  });

  const [updateBook, { isLoading, isError, isSuccess }] =
    useUpdateBookMutation();
  const navigate = useNavigate();

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
    updateBook({ id: book?.id, data: values });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  }, [isSuccess, navigate]);

  return (
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
          min="1"
          max="5"
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
        Edit Book
      </button>

      {!isLoading && isError && (
        <Error message="There was an error occurred editing book!" />
      )}
      {isSuccess && <Success message="Book was edited successfully" />}
    </form>
  );
}
