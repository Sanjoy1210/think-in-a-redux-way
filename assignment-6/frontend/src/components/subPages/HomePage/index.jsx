import AllBlogs from './AllBlogs';
import Sidebar from './Sidebar';

export default function HomePage() {
  return (
    <section className="wrapper">
      <Sidebar />
      <AllBlogs />
    </section>
  );
}
