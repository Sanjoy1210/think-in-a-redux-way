import logo from '@assets/images/lws-logo-light.svg';
import {
  CheckboxWithLabel,
  Error,
  FormInput,
  FormSubmitButton,
} from '@components/reusable';
import { useRegisterMutation } from '@rtk/features/auth/authApi';
import { useEffect, useReducer, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const reducer = (state, newState) => {
  return {
    ...state,
    ...newState,
  };
};

export default function Register() {
  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
  };

  const [values, setValues] = useReducer(reducer, initialState);
  const [err, setErr] = useState('');
  const [register, { isLoading, isError, error, isSuccess }] =
    useRegisterMutation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = name === 'agree' ? e.target.checked : e.target.value;
    setValues({
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErr('');
    if (values.confirmPassword !== values.password) {
      return setErr("Password doesn't match");
    }
    register({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/inbox');
    }
    if (isError) {
      setErr(error?.data);
    }
  }, [isError, error, isSuccess, navigate]);

  return (
    <div className="grid place-items-center h-screen bg-[#F9FAFB">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={logo}
              alt="Learn with sumit"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <FormInput
                label="Full Name"
                id="full-name"
                name="name"
                autoComplete="name"
                className="rounded-t-md"
                placeholder="Full name"
                value={values.name}
                onChange={handleChange}
              />
              <FormInput
                label="Email address"
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email address"
                value={values.email}
                onChange={handleChange}
              />
              <FormInput
                label="Password"
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
              <FormInput
                label="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="current-confirmPassword"
                placeholder="Confirm Password"
                className="rounded-b-md"
                value={values.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <CheckboxWithLabel
              label="Agreed with the terms and condition"
              id="agree"
              name="agree"
              checked={values.agree}
              onChange={handleChange}
            />

            <FormSubmitButton
              text="Sign up"
              type="submit"
              disabled={isLoading}
            />

            {err && <Error message={err} />}
          </form>
          <div className="flex items-center">
            <div className="text-sm">
              Already have an account?{' '}
              <Link
                to="/"
                className="font-medium text-violet-600 hover:text-violet-500"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
