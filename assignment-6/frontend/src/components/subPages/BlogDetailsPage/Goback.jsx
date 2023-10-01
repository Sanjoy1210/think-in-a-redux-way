import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Goback() {
  return (
    <div className="container mt-8">
      <Link
        to="/"
        className="text-gray-600 home-btn flex gap-x-2"
        id="lws-goHome"
      >
        <span className="text-xl">
          <AiFillHome />
        </span>
        Go Home
      </Link>
    </div>
  );
}
