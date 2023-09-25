import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SectionHeader from "./SectionHeader";
import Book from "./Book";
import BookForm from "./BookForm";
import fetchBooks from "../redux/books/thunk/fetchBooks";

function MainSection() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const filters = useSelector((state) => state.filters);
  const [selectedBook, setSelectedBook] = useState({
    isEdit: false,
  });

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  const filteredByStatus = (book) => {
    switch (filters.status) {
      case "featured":
        return book.featured;

      default:
        return true;
    }
  };

  const filteredBySearch = (book) => {
    const newRegEx = new RegExp(filters.search, "gi");
    if (book.name.match(newRegEx)) {
      return true;
    }
    return false;
  };

  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <SectionHeader />
          <div className="lws-bookContainer">
            {books
              .filter(filteredByStatus)
              .filter(filteredBySearch)
              .map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  setSelectedBook={setSelectedBook}
                />
              ))}
          </div>
        </div>
        <BookForm selectedBook={selectedBook} />
      </div>
    </main>
  );
}

export default MainSection;
