import { updateBlogById } from '@rtk/features/blog/blogSlice';
import PropTypes from 'prop-types';
import { BsBookmark } from 'react-icons/bs';
import { HiOutlineHandThumbUp } from 'react-icons/hi2';
import { useDispatch } from 'react-redux';

export default function Details({
  image,
  title,
  tags,
  likes,
  isSaved,
  description,
  id,
}) {
  const dispatch = useDispatch();

  const handleUpdateBlog = (key) => {
    if (key === 'likes') {
      dispatch(updateBlogById({ id, data: { likes: likes + 1 } }));
    }
    if (key === 'saved') {
      dispatch(updateBlogById({ id, data: { isSaved: !isSaved } }));
    }
  };

  return (
    <main className="post">
      <img
        src={image}
        alt={title}
        className="w-full aspect-video rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div
          className="tags flex gap-x-2 flex-wrap text-sm"
          id="lws-singleTags"
        >
          {tags?.map((tag) => (
            <span key={Math.random()}>#{tag}</span>
          ))}
        </div>
        <div className="btn-group mt-2">
          {/* handle like on button click */}
          <button
            className="like-btn flex gap-x-1 items-center"
            id="lws-singleLinks"
            onClick={() => handleUpdateBlog('likes')}
          >
            <span className="text-lg">
              <HiOutlineHandThumbUp />
            </span>{' '}
            {likes}
          </button>
          {/* handle save on button click  */}
          {/* use ".active" class and "Saved" text  if a post is saved, other wise "Save" */}
          <button
            className={`${
              isSaved ? 'active' : ''
            } save-btn flex items-center gap-x-1`}
            id="lws-singleSavedBtn"
            onClick={() => handleUpdateBlog('saved')}
          >
            <span>
              <BsBookmark />
            </span>
            {isSaved ? 'Saved' : 'Save'}
          </button>
        </div>
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
}

Details.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
  likes: PropTypes.number,
  isSaved: PropTypes.bool,
  description: PropTypes.string,
  id: PropTypes.number,
};
