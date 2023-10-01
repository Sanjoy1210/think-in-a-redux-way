import { Loading } from '@components/reusable';
import { fetchBlogs } from '@rtk/features/blogs/blogsSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Blog from './Blog';

export default function AllBlogs() {
  const dispatch = useDispatch();
  const { isLoading, isError, error, blogs } = useSelector(
    (state) => state.blogs
  );
  const { sort, filter } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchBlogs({ sort, filter }));
  }, [dispatch, sort, filter]);

  // display what to render
  let content = null;

  if (isLoading) {
    content = <Loading />;
  }

  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }

  if (!isLoading && !isError && blogs?.length === 0) {
    content = <div className="col-span-12">No blogs found</div>;
  }

  if (!isLoading && !isError && blogs?.length > 0) {
    content = (
      <main className="post-container" id="lws-postContainer">
        {blogs?.map((blog) => (
          <Blog key={blog?.id} {...blog} />
        ))}
      </main>
    );
  }

  return content;
}

{
  /* <div className="lws-card">
  <a href="post.html">
    <img src="./images/git.webp" className="lws-card-image" alt="Top Github Alternatives" />
  </a>
  <div className="p-4">
    <div className="lws-card-header">
      <p className="lws-publishedDate">2023-05-01</p>
      <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>100</p>
    </div>
    <a href="post.html" className="lws-postTitle"> Top Github Alternatives </a>
    <div className="lws-tags"><span>#python,</span> <span>#tech,</span> <span>#git</span></div>
    
    <div className="flex gap-2 mt-4">
      <span className="lws-badge"> Saved </span>
    </div>
    
  </div>
</div> */
}
