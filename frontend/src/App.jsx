import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import PublicProfile from './pages/PublicProfile';
import Landing from './pages/Landing';
import Marketplace from './pages/Marketplace';

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

const PublicRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  if (user) return <Navigate to="/home" replace />;
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page properly mapped to / */}
        <Route path="/" element={
          <PublicRoute>
            <Landing />
          </PublicRoute>
        } />

        {/* Fallback to catch the bad /landing url being stuck in history */}
        <Route path="/landing" element={<Navigate to="/" replace />} />

        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/public-profile/:userId" element={
          <ProtectedRoute>
            <PublicProfile />
          </ProtectedRoute>
        } />
        <Route path="/marketplace" element={
          <ProtectedRoute>
            <Marketplace />
          </ProtectedRoute>
        } />
        <Route path="/register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        } />
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
