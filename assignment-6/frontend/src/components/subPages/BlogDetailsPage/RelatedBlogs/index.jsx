import { fetchRelatedBlogs } from '@rtk/features/relatedBlogs/relatedBlogsSlice';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RelatedBlog from './RelatedBlog';

export default function RelatedBlogs({ currentId, tags }) {
  const dispatch = useDispatch();
  const { relatedBlogs } = useSelector((state) => state.relatedBlogs);

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id: currentId }));
  }, [dispatch, tags, currentId]);

  return relatedBlogs?.length > 0 ? (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="lg:space-y-4 related-post-container sm:grid grid-cols-2 gap-4 lg:block">
        {relatedBlogs?.map((blog) => (
          <RelatedBlog key={blog?.id} {...blog} />
        ))}
      </div>
    </aside>
  ) : null;
}

RelatedBlogs.propTypes = {
  currentId: PropTypes.string,
  tags: PropTypes.array,
};
