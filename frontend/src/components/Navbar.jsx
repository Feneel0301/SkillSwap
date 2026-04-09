import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const navLinks = [
    { label: 'Home', href: '#', active: true },
    { label: 'Marketplace', href: '#marketplace' },

];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const { user, isAuthenticated, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-xl shadow-black/5 transition-all duration-300">
            <nav className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
                {/* Left: Logo + Links */}
                <div className="flex items-center gap-8">
                    <span
                        className="text-2xl font-black tracking-tight text-primary font-headline cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        SkillSwap
                    </span>
                    <div className="hidden md:flex gap-6 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className={
                                    link.active
                                        ? 'text-primary font-bold border-b-2 border-primary px-1 py-1'
                                        : 'text-on-surface-variant font-medium hover:text-primary transition-colors duration-200'
                                }
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right: Search + Icons + Profile/Auth */}
                <div className="flex items-center gap-4">
                    {/* Search */}
                    <div className="relative hidden lg:block">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">
                            search
                        </span>
                        <input
                            className="bg-surface-container-high border-none rounded-full py-2 pl-10 pr-4 w-64 text-sm placeholder:text-on-surface-variant/60 transition-shadow duration-200"
                            placeholder="Search skills..."
                            type="text"
                        />
                    </div>

                    {/* Wallet Icon */}
                    <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors duration-200">
                        <span className="material-symbols-outlined">account_balance_wallet</span>
                    </button>

                    {isAuthenticated ? (
                        /* Authenticated: Show user name + logout */
                        <div className="hidden sm:flex items-center gap-3">
                            <div className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-full font-semibold">
                                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                                    {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                                </div>
                                <span className="text-sm max-w-[100px] truncate">
                                    {user?.name || 'User'}
                                </span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors duration-200"
                                title="Logout"
                            >
                                <span className="material-symbols-outlined">logout</span>
                            </button>
                        </div>
                    ) : (
                        /* Not authenticated: Show login/register CTAs */
                        <div className="hidden sm:flex items-center gap-2">
                            <button
                                onClick={() => navigate('/login')}
                                className="text-on-surface-variant font-semibold text-sm px-4 py-2 rounded-full hover:bg-surface-container-high transition-colors duration-200"
                            >
                                Sign in
                            </button>
                            <button
                                onClick={() => navigate('/register')}
                                className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-full font-semibold cursor-pointer active:scale-95 transition-transform duration-150 hover:bg-primary-container text-sm"
                            >
                                Get Started
                            </button>
                        </div>
                    )}

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <span className="material-symbols-outlined">
                            {mobileOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-6 pb-4 flex flex-col gap-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={
                                link.active
                                    ? 'text-primary font-bold text-lg'
                                    : 'text-on-surface-variant font-medium text-lg hover:text-primary transition-colors duration-200'
                            }
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <hr className="border-outline-variant/20 my-2" />
                    {isAuthenticated ? (
                        <>
                            <div className="text-on-surface font-semibold">
                                👋 {user?.name || 'User'}
                            </div>
                            <button
                                onClick={() => { handleLogout(); setMobileOpen(false); }}
                                className="text-left text-error font-medium hover:text-error/80 transition-colors"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => { navigate('/login'); setMobileOpen(false); }}
                                className="text-left text-on-surface-variant font-medium text-lg hover:text-primary transition-colors"
                            >
                                Sign in
                            </button>
                            <button
                                onClick={() => { navigate('/register'); setMobileOpen(false); }}
                                className="text-left text-primary font-bold text-lg"
                            >
                                Get Started
                            </button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
