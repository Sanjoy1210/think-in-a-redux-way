import { Loading } from '@components/reusable';
import { fetchPosts } from '@rtk/features/posts/postsSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Job from './Job';

export default function AllJobList({ text, sortType }) {
  const dispatch = useDispatch();
  const { isLoading, isError, error, posts } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPosts(''));
  }, [dispatch]);

  const filterBySearch = (post) => {
    const reqEx = new RegExp(text, 'ig');
    return post?.title?.search(reqEx) === -1 ? false : true;
  };

  const filterBySort = (a, b) => {
    if (sortType === 'desc') {
      return b.salary - a.salary;
    }
    if (sortType === 'asc') {
      return a.salary - b.salary;
    }
  };

  // decide what to render
  let content = null;
  if (isLoading) {
    content = <Loading isFullScreen={false} />;
  }
  if (!isLoading && isError) {
    content = <div className="text-white">{error}</div>;
  }
  if (!isLoading && !isError && posts?.length === 0) {
    content = <div className="text-white">No posts found</div>;
  }
  if (!isLoading && !isError && posts?.length > 0) {
    content = (
      <div className="jobs-list">
        {posts
          ?.filter(filterBySearch)
          ?.sort(filterBySort)
          ?.map((post) => (
            <Job key={post?.id} post={post} />
          ))}
      </div>
    );
  }

  return content;
}
