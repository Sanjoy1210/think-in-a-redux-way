import { setSearch } from '@rtk/features/filters/filtersSlice';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';

export default function Search() {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filters);
  const [value, setValue] = useState(search || '');
  const timer = useRef(null);
  const navigate = useNavigate();
  const isHomePage = useMatch('/');

  // dispatch action after 500 ms using debounce technique
  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      dispatch(setSearch(value));
    }, 500);

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [dispatch, value]);

  useEffect(() => {
    if (search && !isHomePage) {
      navigate('/');
    }
    setValue(search);
  }, [search, navigate, isHomePage]);

  return (
    <form className="flex items-center">
      <div className="group relative rounded-md bg-white">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          ></path>
        </svg>
        <input
          type="text"
          placeholder="Filter books..."
          className="search"
          id="lws-search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
}
