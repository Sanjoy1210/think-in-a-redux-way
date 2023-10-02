import {
  Button,
  FormInput,
  FormInputPrefix,
  FormInputSelect,
} from '@components/reusable';
import { createPost } from '@rtk/features/posts/postsSlice';
import { jobTitles, jobTypes } from '@utils/jobData';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function CreatePage() {
  const [inputValues, setInputValues] = useState({
    title: '',
    type: '',
    salary: '',
    deadline: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = name === 'salary' ? e.target.valueAsNumber : e.target.value;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(inputValues));
    setInputValues({
      title: '',
      type: '',
      salary: '',
      deadline: '',
    });
  };

  return (
    <>
      <h1 className="mb-10 text-center lws-section-title">Add New Job</h1>
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
            <Button type="submit" id="lws-submit" text="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}
