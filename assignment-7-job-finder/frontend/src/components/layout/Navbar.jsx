import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="max-w-[90rem] mx-auto text-white py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4">
      <Link to="/">
        <h1 className="text-2xl font-bold">JobFinder</h1>
      </Link>
    </nav>
  );
}
