import { Loading } from '@components/reusable';
import { fetchBlog } from '@rtk/features/blog/blogSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Details from './Details';
import Goback from './Goback';
import RelatedBlogs from './RelatedBlogs';

export default function BlogDetailsPage() {
  const dispatch = useDispatch();
  const { isLoading, isError, error, blog } = useSelector(
    (state) => state.blog
  );
  const { id: blogId } = useParams();

  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [dispatch, blogId]);

  // describe what to render
  let content = null;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }
  if (!isLoading && !isError && !blog?.id) {
    content = <div className="col-span-12">NO blog found</div>;
  }
  if (!isLoading && !isError && blog?.id) {
    content = (
      <section className="post-page-container">
        <Details {...blog} />
        <RelatedBlogs currentId={blogId} tags={blog?.tags} />
      </section>
    );
  }

  return (
    <div>
      <Goback />
      {content}
    </div>
  );
}
