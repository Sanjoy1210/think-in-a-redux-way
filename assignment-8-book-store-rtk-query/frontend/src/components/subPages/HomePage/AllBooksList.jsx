import { Error, Loader } from '@components/reusable';
import { useGetBooksQuery } from '@rtk/features/api/apiSlice';
import { useSelector } from 'react-redux';
import Book from './Book';

export default function AllBooksList() {
  const { data: books, isLoading, isError } = useGetBooksQuery();
  const { featured, search } = useSelector((state) => state.filters);
  const regEx = new RegExp(search, 'ig');

  const filteredByFeatured = (book) => {
    if (featured === 'featured') {
      return book.featured;
    }
    return book;
  };

  const filteredBySearch = (book) => {
    return book?.name?.search(regEx) > -1 ? true : false;
  };

  // decide what to render
  let content = null;
  if (isLoading) {
    content = (
      <>
        <Loader />
        <Loader />
        <Loader />
      </>
    );
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error occurred!" />;
  }
  if (!isLoading && !isError && books?.length === 0) {
    content = <Error message="No books found" />;
  }
  if (!isLoading && !isError && books?.length > 0) {
    content = books
      ?.filter(filteredByFeatured)
      ?.filter(filteredBySearch)
      ?.map((book) => <Book key={book?.id} book={book} />);
  }

  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {content}
    </div>
  );
}
