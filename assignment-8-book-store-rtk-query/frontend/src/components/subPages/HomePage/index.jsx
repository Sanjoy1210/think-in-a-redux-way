import AllBooksList from './AllBooksList';
import Header from './Header';

export default function HomePage() {
  return (
    <div className="order-2 xl:-order-1">
      <Header />
      <AllBooksList />
    </div>
  );
}
