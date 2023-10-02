import {
  Button,
  FormInput,
  FormInputPrefix,
  FormInputSelect,
} from '@components/reusable';
import {
  editInActivePost,
  fetchPost,
  updatePost,
} from '@rtk/features/posts/postsSlice';
import { jobTitles, jobTypes } from '@utils/jobData';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditPage() {
  const { post } = useSelector((state) => state.posts);
  const [inputValues, setInputValues] = useState({
    title: post?.title || '',
    type: post?.type || '',
    salary: post?.salary || '',
    deadline: post?.deadline || '',
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  useEffect(() => {
    setInputValues({
      title: post?.title || '',
      type: post?.type || '',
      salary: post?.salary || '',
      deadline: post?.deadline || '',
    });
  }, [post]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = name === 'salary' ? e.target.valueAsNumber : e.target.value;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postAction = await dispatch(updatePost({ id, data: inputValues }));

    if (updatePost.fulfilled.match(postAction)) {
      setInputValues({
        title: '',
        type: '',
        salary: '',
        deadline: '',
      });
      await dispatch(editInActivePost());
      navigate('/');
    }
  };

  return (
    <>
      <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

      <div className="max-w-3xl mx-auto">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <FormInputSelect
            id="lws-JobTitle"
            label="Job Title"
            name="title"
            value={inputValues.title}
            onChange={handleChange}
          >
            <option value="" hidden>
              Select Job
            </option>
            {jobTitles?.map((title) => (
              <option key={Math.random()} value={title}>
                {title}
              </option>
            ))}
          </FormInputSelect>

          <FormInputSelect
            id="lws-JobType"
            label="Job Type"
            name="type"
            value={inputValues.type}
            onChange={handleChange}
          >
            <option value="" hidden>
              Select Job Type
            </option>
            {jobTypes?.map((type) => (
              <option key={Math.random()} value={type}>
                {type}
              </option>
            ))}
          </FormInputSelect>

          <FormInputPrefix
            id="lws-JobSalary"
            name="salary"
            label="Salary"
            value={inputValues.salary}
            onChange={handleChange}
          />

          <FormInput
            label="Deadline"
            id="lws-JobDeadline"
            name="deadline"
            value={inputValues.deadline}
            onChange={handleChange}
          />

          <div className="text-right">
            <Button type="submit" id="lws-submit" text="Update" />
          </div>
        </form>
      </div>
    </>
  );
}
