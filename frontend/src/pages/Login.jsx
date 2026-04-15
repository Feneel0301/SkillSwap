import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGoogleOneTapLogin, GoogleLogin } from '@react-oauth/google';
import api from '../api/axios';
import {
  GoogleIcon,
  GitHubIcon,
  EyeIcon,
  EyeClosedIcon,
  SkillSwapLogo,
  ArrowLeftIcon,
} from '../components/Icons';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Google One-Tap Login
  useGoogleOneTapLogin({
    onSuccess: async (credentialResponse) => {
      try {
        const res = await api.post('/auth/oauth', { token: credentialResponse.credential });
        if (res.data.success) {
          localStorage.setItem('user', JSON.stringify(res.data.data.user));
          navigate('/home');
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Google login failed');
      }
    },
    onError: () => setError('Google One-Tap failed'),
  });

  const handleGoogleSuccess = async (response) => {
    try {
      const res = await api.post('/auth/oauth', { token: response.credential });
      if (res.data.success) {
        localStorage.setItem('user', JSON.stringify(res.data.data.user));
        navigate('/home');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Google login failed');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const res = await api.post('/auth/login', formData);
      if (res.data.success) {
        localStorage.setItem('user', JSON.stringify(res.data.data.user));
        navigate('/home');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative overflow-hidden font-sans">
      {/* Subtle Background Radial Gradients */}
      <div className="pointer-events-none absolute inset-0 flex justify-center items-center">
        <div className="absolute w-[800px] h-[800px] bg-slate-100 rounded-full opacity-50 blur-[100px] -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute w-[600px] h-[600px] bg-blue-50 rounded-full opacity-30 blur-[80px] translate-x-1/3 translate-y-1/3" />
      </div>

      {/* Top Header */}
      <div className="absolute top-0 w-full p-6 flex justify-between items-center z-20">
        <Link
          to="/"
          className="flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Back to explore
        </Link>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-4 mt-8">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <SkillSwapLogo className="w-8 h-8" />
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            SkillSwap
          </span>
        </div>

        {/* Main Card */}
        <div className="w-full max-w-[440px] bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-slate-500">Pick up right where you left off</p>
          </div>

          <div className="flex justify-center mb-8">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => setError('Google login failed')}
              useOneTap
              theme="outline"
              size="large"
              shape="pill"
              width="360"
            />
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-slate-200 flex-1"></div>
            <span className="text-xs font-semibold text-slate-500">
              or email
            </span>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          {error && <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">{error}</div>}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700 tracking-wide">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="name@example.com"
                className="w-full bg-slate-100 border border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all rounded-full px-5 py-3.5 text-slate-900 placeholder:text-slate-400 outline-none"
              />
            </div>

            <div className="space-y-1.5 relative">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-slate-700 tracking-wide">
                  Password
                </label>
                <Link
                  to="#"
                  className="text-sm font-bold text-blue-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full bg-slate-100 border border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all rounded-full px-5 py-3.5 pr-12 text-slate-900 placeholder:text-slate-400 outline-none tracking-widest font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition-colors"
                >
                  {showPassword ? (
                    <EyeIcon className="w-5 h-5" />
                  ) : (
                    <EyeClosedIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full py-4 mt-2 transition-colors shadow-lg shadow-blue-600/20 text-lg disabled:opacity-50"
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-slate-500">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 font-bold hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Area */}
      <div className="relative z-10 w-full pb-8 flex justify-center gap-6 text-sm font-semibold text-slate-500">
        <Link to="#" className="hover:text-slate-800 transition-colors">
          Terms
        </Link>
        <Link to="#" className="hover:text-slate-800 transition-colors">
          Privacy
        </Link>
        <Link to="#" className="hover:text-slate-800 transition-colors">
          Help Center
        </Link>
      </div>
    </div>
  );
}
