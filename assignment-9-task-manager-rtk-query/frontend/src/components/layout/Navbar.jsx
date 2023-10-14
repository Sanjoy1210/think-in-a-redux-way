import logo from '@assets/images/logo.svg';
import { setSearch } from '@rtk/features/filters/filtersSlice';
import { useDispatch } from 'react-redux';
import { Link, useMatch } from 'react-router-dom';

export default function Navbar() {
  const dispatch = useDispatch();
  const isHomePage = useMatch('/');

  const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const doSearch = (value) => {
    dispatch(setSearch(value));
  };

  const handleSearch = debounce(doSearch, 500);

  return (
    <nav className="relative py-3 shadow">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img src={logo} />
        </Link>
        <div className="flex-1 max-w-xs search-field group">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input
            type="text"
            placeholder="Search Task"
            className="search-input"
            id="lws-searchTask"
            onChange={(e) => handleSearch(e.target.value)}
            disabled={!isHomePage}
          />
        </div>
      </div>
    </nav>
  );
}
