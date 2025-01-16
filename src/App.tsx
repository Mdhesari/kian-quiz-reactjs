import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import { User, LogOut, Rainbow } from 'lucide-react';
import { Button } from './components/ui/Button';
import { Hero } from './components/landing/Hero';
import { Dashboard } from './components/dashboard/Dashboard';
import { GameBoard } from './components/game/GameBoard';
import { ProfileEdit } from './components/profile/ProfileEdit';
import { Toast } from './components/ui/Toast';
import { useToastStore } from './store/toastStore';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

function App() {
  const { isAuthenticated, user, logout } = useAuthStore();
  const { toasts, removeToast } = useToastStore();

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-3">
                <Rainbow className="w-8 h-8 text-indigo-600" />
                <h1 className="text-2xl font-bold text-gray-900">KianQuiz</h1>
              </Link>
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <Link to="/profile" className="flex items-center space-x-2">
                    <img
                      src={user?.avatar}
                      alt={user?.username}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-gray-700">{user?.username}</span>
                  </Link>
                  <Link to="/profile">
                    <Button variant="secondary">
                      <User className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Button onClick={logout} variant="secondary">
                    <LogOut className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link to="/login">
                    <Button variant="secondary">Sign In</Button>
                  </Link>
                  <Link to="/register">
                    <Button>Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={
              !isAuthenticated ? <Hero /> : <Dashboard />
            } />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/game" element={<GameBoard />} />
            <Route path="/profile" element={<ProfileEdit />} />
          </Routes>
        </main>

        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </Router>
  );
}

export default App;