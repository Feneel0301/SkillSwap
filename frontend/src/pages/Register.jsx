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
  ShieldCheckIcon,
  UsersIcon,
} from '../components/Icons';

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [otp, setOtp] = useState('');

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
        setError(err.response?.data?.message || 'Google signup failed');
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
      setError(err.response?.data?.message || 'Google signup failed');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleRegisterInit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await api.post('/auth/register-init', formData);
      setShowOtpPopup(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await api.post('/auth/register-verify', { email: formData.email, otp });
      alert('Verification successful! You can now login.');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Verification failed');
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

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-4">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <SkillSwapLogo className="w-8 h-8" />
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            SkillSwap
          </span>
        </div>

        {/* Main Card */}
        <div className="w-full max-w-[440px] bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Create your account
          </h1>
          <p className="text-slate-500 mb-8">
            Join a community of 50k+ curators and learners.
          </p>

          <div className="flex justify-center mb-8">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => setError('Google signup failed')}
              useOneTap
              theme="outline"
              size="large"
              shape="pill"
              width="360"
            />
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-slate-200 flex-1"></div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Or email
            </span>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          {error && <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">{error}</div>}

          <form className="space-y-5" onSubmit={handleRegisterInit}>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 tracking-wide uppercase">
                Full Name
              </label>
              <input
                type="text"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full bg-slate-100 border border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all rounded-2xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 tracking-wide uppercase">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="name@company.com"
                className="w-full bg-slate-100 border border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all rounded-2xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 outline-none"
              />
            </div>

            <div className="space-y-1.5 relative">
              <label className="text-xs font-bold text-slate-600 tracking-wide uppercase">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full bg-slate-100 border border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all rounded-2xl px-4 py-3.5 pr-12 text-slate-900 placeholder:text-slate-400 outline-none tracking-widest font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
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
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full py-4 mt-2 transition-colors shadow-lg shadow-blue-600/20 disabled:opacity-50"
            >
              {isLoading ? 'Sending OTP...' : 'Get Started'}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-slate-500">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 font-bold hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>

      {/* OTP Popup */}
      {showOtpPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-sm rounded-3xl p-8 shadow-2xl animate-in zoom-in-95 duration-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Check your email</h2>
            <p className="text-slate-500 mb-6 text-sm">We've sent a 6-digit verification code to <span className="font-bold text-slate-700">{formData.email}</span></p>
            
            {error && <div className="mb-4 p-2 bg-red-50 text-red-600 text-xs rounded-lg border border-red-100">{error}</div>}
            
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <input 
                type="text" 
                maxLength="6" 
                value={otp} 
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                placeholder="000000"
                className="w-full bg-slate-100 border-2 border-transparent focus:border-blue-500 focus:bg-white transition-all rounded-2xl px-4 py-4 text-center text-3xl font-bold tracking-[1rem] outline-none"
              />
              <button 
                type="submit" 
                disabled={isLoading || otp.length < 6}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full py-4 transition-all disabled:opacity-50"
              >
                {isLoading ? 'Verifying...' : 'Verify Email'}
              </button>
              <button 
                type="button" 
                onClick={() => setShowOtpPopup(false)}
                className="w-full text-slate-400 font-semibold text-sm hover:text-slate-600 transition-colors"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer Area */}
      <div className="relative z-10 w-full pb-8 flex flex-col items-center text-xs font-semibold text-slate-500 gap-6">
        <div className="flex gap-8 uppercase tracking-wide">
          <div className="flex items-center gap-2">
            <ShieldCheckIcon className="w-4 h-4" />
            Bank-Grade Security
          </div>
          <div className="flex items-center gap-2">
            <UsersIcon className="w-4 h-4" />
            50K+ Members
          </div>
        </div>

        <div className="flex gap-6 mt-4">
          <Link to="#" className="hover:text-slate-800 transition-colors">
            Terms of Service
          </Link>
          <Link to="#" className="hover:text-slate-800 transition-colors">
            Privacy Policy
          </Link>
          <Link to="#" className="hover:text-slate-800 transition-colors">
            Help Center
          </Link>
        </div>
        <div className="text-slate-400 font-normal">
          © 2024 SkillSwap. Crafting the future of P2P learning.
        </div>
      </div>
    </div>
  );
}
