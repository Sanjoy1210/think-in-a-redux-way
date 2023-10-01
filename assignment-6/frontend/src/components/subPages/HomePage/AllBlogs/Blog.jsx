import PropTypes from 'prop-types';
import { HiOutlineHandThumbUp } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

export default function Blog({
  image,
  title,
  createdAt,
  likes,
  tags,
  isSaved,
  id,
}) {
  return (
    <div className="lws-card">
      <Link to={`/blogs/${id}`}>
        <img src={image} className="lws-card-image" alt={title} />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount flex items-center gap-x-1">
            <span className="text-xl">
              <HiOutlineHandThumbUp />
            </span>
            {likes}
          </p>
        </div>
        <Link to={`/blogs/${id}`} className="lws-postTitle">
          {title}
        </Link>
        <div className="lws-tags flex-wrap text-sm">
          {tags?.map((tag) => (
            <span key={Math.random()}>#{tag}</span>
          ))}
        </div>

        <div className="flex gap-2 mt-4">
          <span className="lws-badge">{isSaved ? 'Saved' : 'Save'}</span>
        </div>
      </div>
    </div>
  );
}

Blog.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  createdAt: PropTypes.string,
  likes: PropTypes.number,
  tags: PropTypes.array,
  isSaved: PropTypes.bool,
};
