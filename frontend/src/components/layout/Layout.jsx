import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header onMenuToggle={toggleSidebar} />
      
      <div className="flex-1 flex max-w-[1440px] mx-auto w-full relative">
        {/* Sidebar - Handles its own responsive behavior with isOpen prop */}
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        
        {/* Backdrop for mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden transition-opacity"
            onClick={closeSidebar}
          />
        )}

        <main className="flex-1 p-4 md:p-8 lg:p-10 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
