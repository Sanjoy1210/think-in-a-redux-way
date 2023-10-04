import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="py-12 px-6 2xl:px-6 container">{children}</main>
      <Footer />
    </>
  );
}
