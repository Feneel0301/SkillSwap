import React from 'react';
import { Link } from 'react-router-dom';
import { SkillSwapLogo } from '../Icons';

export default function LandingFooter() {
  return (
    <footer className="bg-slate-200/50 pt-20 pb-10 px-8 border-t border-slate-200">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <SkillSwapLogo className="w-6 h-6" />
            <span className="text-lg font-bold tracking-tight text-blue-700">SkillSwap</span>
          </Link>
          <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">
            Redefining peer-to-peer education through the philosophy of tactile wisdom and global exchange.
          </p>
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-600 shadow-sm cursor-pointer hover:text-blue-600 transition-colors">
               <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-600 shadow-sm cursor-pointer hover:text-blue-600 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-900 mb-6 uppercase tracking-wider">Explore</h4>
          <ul className="space-y-4 text-xs font-medium text-slate-500">
            <li><Link to="#" className="hover:text-blue-600 transition-colors">Marketplace</Link></li>
            <li><Link to="#" className="hover:text-blue-600 transition-colors">Live Sessions</Link></li>
            <li><Link to="#" className="hover:text-blue-600 transition-colors">Curators</Link></li>
            <li><Link to="#" className="hover:text-blue-600 transition-colors">Credits</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-900 mb-6 uppercase tracking-wider">Company</h4>
          <ul className="space-y-4 text-xs font-medium text-slate-500">
            <li><Link to="#" className="hover:text-blue-600 transition-colors">About Us</Link></li>
            <li><Link to="#" className="hover:text-blue-600 transition-colors">Careers</Link></li>
            <li><Link to="#" className="hover:text-blue-600 transition-colors">Blog</Link></li>
            <li><Link to="#" className="hover:text-blue-600 transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-1">
          <h4 className="text-xs font-bold text-slate-900 mb-6 uppercase tracking-wider">Subscribe to our curator newsletter</h4>
          <div className="flex bg-white rounded-full p-1 shadow-sm border border-slate-200">
            <input type="email" placeholder="Email address" className="bg-transparent border-none outline-none text-xs font-semibold px-4 w-full text-slate-700 placeholder:text-slate-400" />
            <button className="bg-blue-600 text-white rounded-full px-5 py-2 text-xs font-bold hover:bg-blue-700 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200/60 text-[10px] font-semibold text-slate-400 gap-4">
        <p>© 2024 SkillSwap. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="#" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
