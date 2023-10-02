import Create from '@pages/Create';
import Edit from '@pages/Edit';
import Home from '@pages/Home';
import PageNotFound from '@pages/PageNotFound';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
