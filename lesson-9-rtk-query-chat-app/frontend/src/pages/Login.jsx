import logo from '@assets/images/lws-logo-light.svg';
import { Error, FormInput, FormSubmitButton } from '@components/reusable';
import { useLoginMutation } from '@rtk/features/auth/authApi';
import { useEffect, useReducer, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const reducer = (state, newState) => {
  return {
    ...state,
    ...newState,
  };
};

export default function Login() {
  const initialState = {
    email: '',
    password: '',
  };
  const [values, setValues] = useReducer(reducer, initialState);
  const [login, { isLoading, isError, error, isSuccess }] = useLoginMutation();
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr('');
    login(values);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/inbox');
    }
    if (isError) {
      setErr(error?.data);
    }
  }, [isSuccess, isError, error, navigate]);

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
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <FormInput
                label="Email address"
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email address"
                className="rounded-t-md"
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
                className="rounded-b-md"
                value={values.password}
                onChange={handleChange}
              />
            </div>

            <FormSubmitButton
              text="Sign in"
              type="submit"
              disabled={isLoading}
            />

            {err && <Error message={err} />}
          </form>
          <div className="flex items-center">
            <div className="text-sm">
              {`Don't have an account?`}{' '}
              <Link
                to="/register"
                className="font-medium text-violet-600 hover:text-violet-500"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
