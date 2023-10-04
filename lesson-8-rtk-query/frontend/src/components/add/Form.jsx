// import Success from "../ui/Success";
import { useState } from 'react';
import { useAddVideoMutation } from '../../features/api/apiSlice';
import Error from '../ui/Error';
import Success from '../ui/Success';
import TextArea from '../ui/TextArea';
import TextInput from '../ui/TextInput';

export default function Form() {
  const [values, setValues] = useState({
    title: '',
    author: '',
    description: '',
    link: '',
    thumbnail: '',
    date: '',
    duration: '',
    views: '',
  });
  const [addVideo, { isLoading, isSuccess, isError }] = useAddVideoMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setValues({
      title: '',
      author: '',
      description: '',
      link: '',
      thumbnail: '',
      date: '',
      duration: '',
      views: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo(values);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Video Title"
                name="title"
                value={values.title}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Author"
                name="author"
                value={values.author}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6">
              <TextArea
                title="Description"
                name="description"
                value={values.description}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="YouTube Video link"
                name="link"
                value={values.link}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="Thumbnail link"
                name="thumbnail"
                value={values.thumbnail}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput
                title="Upload Date"
                name="date"
                value={values.date}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video Duration"
                name="duration"
                value={values.duration}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video no of views"
                name="views"
                value={values.views}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            disabled={isLoading}
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>

        {isSuccess && <Success message="Video was added successfully" />}
        {isError && <Error message="There was an error occurred" />}
      </div>
    </form>
  );
}
