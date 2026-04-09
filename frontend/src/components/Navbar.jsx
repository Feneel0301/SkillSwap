import { useState } from 'react';

const navLinks = [
    { label: 'Home', href: '#', active: true },
    { label: 'Marketplace', href: '#marketplace' },
    { label: 'Sessions', href: '#sessions' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-xl shadow-black/5 transition-all duration-300">
            <nav className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
                {/* Left: Logo + Links */}
                <div className="flex items-center gap-8">
                    <span className="text-2xl font-black tracking-tight text-primary font-headline">
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

                {/* Right: Search + Icons + Profile */}
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

                    {/* Profile CTA */}
                    <div className="hidden sm:flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-full font-semibold cursor-pointer active:scale-95 transition-transform duration-150 hover:bg-primary-container">
                        <img
                            alt="User profile"
                            className="w-6 h-6 rounded-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpePNBgDGCTiXL0wBrTM9-3fzeecTd5HeldwA0XYyBwgeLtYcXrB0spltnyle86iDztw3p21Y95PK4zgVjW0E95l5GVBjrHBHqhVoHE5JdUL2CfcUxhxOE7fqTf305zHb4Izqcyq-H7rekEYF5WG5FxNnFWqLLQj9vGQHs9HLhnfOixwPd5Gi-uw0gM5gmifVwNlC_CQYFY79s5FoF9E7uTgY2mZ93cnynxK9YyH9hlbn25rOP00V9tjwuhCgBJJuse6TWCVuT0F4"
                        />
                        <span className="text-sm">Profile</span>
                    </div>

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
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
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
                </div>
            </div>
        </header>
    );
}
