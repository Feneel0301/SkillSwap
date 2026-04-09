import { useState } from 'react';

const footerLinks = {
    Explore: ['Marketplace', 'Live Sessions', 'Curators', 'Credits'],
    Company: ['About Us', 'Careers', 'Blog', 'Contact'],
};

export default function Footer() {
    const [email, setEmail] = useState('');

    return (
        <footer className="bg-surface-container-highest pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
                    {/* Brand */}
                    <div className="col-span-2">
                        <span className="text-2xl font-black tracking-tight text-primary font-headline mb-6 block">
                            SkillSwap
                        </span>
                        <p className="text-on-surface-variant max-w-xs leading-relaxed">
                            Redefining peer-to-peer education through the philosophy of
                            tactile wisdom and global exchange.
                        </p>
                        <div className="flex gap-4 mt-8">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors duration-200"
                                aria-label="Share"
                            >
                                <span className="material-symbols-outlined">share</span>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors duration-200"
                                aria-label="Website"
                            >
                                <span className="material-symbols-outlined">public</span>
                            </a>
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="font-bold mb-6">{title}</h4>
                            <ul className="space-y-4 text-on-surface-variant">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="hover:text-primary transition-colors duration-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter */}
                    <div className="col-span-2">
                        <h4 className="font-bold mb-6">
                            Subscribe to our curator newsletter
                        </h4>
                        <div className="flex gap-2">
                            <input
                                className="bg-surface-container-low border-none rounded-full px-6 py-3 flex-1 text-sm placeholder:text-on-surface-variant/60"
                                placeholder="Email address"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button className="bg-primary text-on-primary px-6 py-3 rounded-full font-bold text-sm hover:bg-primary-container transition-colors duration-200 active:scale-95">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-on-surface-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-on-surface-variant">
                        © 2024 SkillSwap. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-on-surface-variant">
                        <a
                            href="#"
                            className="hover:text-on-surface transition-colors duration-200"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-on-surface transition-colors duration-200"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
