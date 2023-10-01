import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function RelatedBlog({
  id,
  image,
  title,
  tags = [],
  createdAt,
}) {
  return (
    <div className="card">
      <Link to={`/blogs/${id}`}>
        <img
          src={image}
          className="card-image w-full aspect-video rounded-lg"
          alt={title}
        />
      </Link>
      <div className="p-4">
        <Link
          to={`/blogs/${id}`}
          className="text-lg post-title lws-RelatedPostTitle"
        >
          {title}
        </Link>
        <div className="mb-0 tags flex flex-wrap gap-x-2 text-sm">
          {tags?.map((tag) => (
            <span key={Math.random()}>#{tag}</span>
          ))}
        </div>
        <p className="text-sm mt-1">{createdAt}</p>
      </div>
    </div>
  );
}

RelatedBlog.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
  createdAt: PropTypes.string,
};
