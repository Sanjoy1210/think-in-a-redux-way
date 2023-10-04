import AddBook from '@pages/AddBook';
import EditBook from '@pages/EditBook';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-book" element={<AddBook />} />
        <Route path="/edit-book/:bookId" element={<EditBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
