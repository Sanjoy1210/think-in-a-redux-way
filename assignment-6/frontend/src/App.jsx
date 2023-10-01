import Blogs from '@pages/Blogs';
import Home from '@pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:id" element={<Blogs />} />
      </Routes>
    </Router>
  );
}
