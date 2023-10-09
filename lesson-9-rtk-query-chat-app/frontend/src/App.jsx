import Conversations from '@pages/Conversations';
import Inbox from '@pages/Inbox';
import Login from '@pages/Login';
import Register from '@pages/Register';
import PrivateRoute from '@utils/PrivateRoute';
import PublicRoute from '@utils/PublicRoute';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import useAuthCheck from './hooks/useAuthCheck';

export default function App() {
  const authChecked = useAuthCheck();

  return !authChecked ? (
    <div>Checking authentication...</div>
  ) : (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/inbox"
          element={
            <PrivateRoute>
              <Conversations />
            </PrivateRoute>
          }
        />
        <Route
          path="/inbox/:id"
          element={
            <PrivateRoute>
              <Inbox />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
