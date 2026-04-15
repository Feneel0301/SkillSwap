import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [showPassword, setShowPassword] = useState(false);

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

          <div className="flex gap-4 mb-8">
            <button className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 transition-colors py-3 rounded-full text-sm font-semibold text-slate-700">
              <GoogleIcon className="w-4 h-4" />
              Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 transition-colors py-3 rounded-full text-sm font-semibold text-slate-700">
              <GitHubIcon className="w-5 h-5" />
              GitHub
            </button>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-slate-200 flex-1"></div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Or email
            </span>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 tracking-wide uppercase">
                Full Name
              </label>
              <input
                type="text"
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
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full py-4 mt-2 transition-colors shadow-lg shadow-blue-600/20"
            >
              Get Started
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
