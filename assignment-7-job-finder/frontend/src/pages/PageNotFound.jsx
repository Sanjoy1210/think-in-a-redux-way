import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div>
      <h1 className="text-white text-2xl">404 | Oops</h1>
      <p className="text-white text-lg">Page not found</p>
      <Link to="/" className="text-white">
        Go Home
      </Link>
    </div>
  );
}
