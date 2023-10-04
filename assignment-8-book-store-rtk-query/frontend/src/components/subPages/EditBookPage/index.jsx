import { Error } from '@components/reusable';
import { useGetBookQuery } from '@rtk/features/api/apiSlice';
import { useParams } from 'react-router-dom';
import Form from './Form';

export default function EditBookPage() {
  const { bookId } = useParams();
  const { data: book, isLoading, isError } = useGetBookQuery(bookId);

  // decide what to render
  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error occurred getting book!" />;
  }
  if (!isLoading && !isError && !book?.id) {
    content = <Error message="No book found" />;
  }
  if (!isLoading && !isError && book?.id) {
    content = <Form book={book} />;
  }

  return (
    <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
      <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
      {content}
    </div>
  );
}
