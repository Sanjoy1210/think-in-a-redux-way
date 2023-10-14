import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl">404</h1>
      <p className="text-3xl">Oops, Page not found!</p>
      <Link to="/" className="text-gray-600 mt-4 border px-4 py-1.5 rounded-md">
        Go Home
      </Link>
    </div>
  );
}
