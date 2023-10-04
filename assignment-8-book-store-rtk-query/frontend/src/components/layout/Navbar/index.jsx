import { removeSearch } from '@rtk/features/filters/filtersSlice';
import { useDispatch } from 'react-redux';
import { Link, useMatch } from 'react-router-dom';
import Search from './Search';

export default function Navbar() {
  const isHomePage = useMatch('/');
  const isAddBookPage = useMatch('/new-book');
  const dispatch = useDispatch();

  const handleClearSearch = () => {
    dispatch(removeSearch());
  };

  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <h1
            className="text-2xl font-bold underline"
            onClick={handleClearSearch}
          >
            RTK Query BookShop
          </h1>
        </Link>

        <ul className="hidden md:flex items-center space-x-6">
          <Link
            className={`${isHomePage ? 'font-semibold' : ''} cursor-pointer`}
            to="/"
            id="lws-bookStore"
          >
            <li onClick={handleClearSearch}>Book Store</li>
          </Link>
          <Link
            className={`${isAddBookPage ? 'font-semibold' : ''} cursor-pointer`}
            to="/new-book"
            id="lws-addBook"
          >
            <li onClick={handleClearSearch}>Add Book</li>
          </Link>
        </ul>

        <Search />
      </div>
    </nav>
  );
}
