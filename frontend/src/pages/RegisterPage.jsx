import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function RegisterPage() {
    const navigate = useNavigate();
    const { register, error, clearError, isAuthenticated } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', password: '' });

    // Redirect if already logged in
    useEffect(() => {
        if (isAuthenticated) navigate('/', { replace: true });
    }, [isAuthenticated, navigate]);

    // Clear auth errors when user starts typing
    useEffect(() => {
        return () => clearError();
    }, [clearError]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (error) clearError();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            await register(form);
            navigate('/');
        } catch {
            // error is already set in context
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="bg-surface text-on-surface min-h-screen flex flex-col relative">
            {/* Background Decoration */}
            <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px]" />
            </div>

            {/* Brand Header */}
            <header className="w-full flex justify-center py-5">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-container rounded-full flex items-center justify-center text-on-primary transition-transform duration-300 group-hover:scale-110">
                        <span
                            className="material-symbols-outlined"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            swap_horiz
                        </span>
                    </div>
                    <span className="text-2xl font-black tracking-tight text-primary font-headline">
                        SkillSwap
                    </span>
                </Link>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center px-6 py-6">
                <div className="w-full max-w-[480px] space-y-8">
                    {/* Card */}
                    <div className="bg-surface-container-lowest rounded-lg p-8 md:p-12 ambient-shadow relative overflow-hidden">
                        {/* Decorative blob */}
                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary-fixed/30 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            {/* Heading */}
                            <div className="mb-10 text-center md:text-left">
                                <h1 className="font-headline text-4xl font-extrabold tracking-tight mb-2">
                                    Create your account
                                </h1>
                                <p className="text-on-surface-variant">
                                    Join a community of 50k+ curators and learners.
                                </p>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="mb-6 p-4 bg-error-container text-on-error-container rounded-2xl text-sm font-medium flex items-center gap-2 animate-[fadeIn_0.2s_ease-out]">
                                    <span className="material-symbols-outlined text-lg">error</span>
                                    {error}
                                </div>
                            )}

                            {/* Social Logins */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <button className="flex items-center justify-center gap-3 px-4 py-3 bg-surface-container-high hover:bg-surface-variant transition-colors duration-200 rounded-full group">
                                    <img
                                        alt="Google Logo"
                                        className="w-5 h-5"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt-Jnbc1rFivumk6YtXNYWqO4MSRMP5XxnCryBmJHxaml9eKCraH0YrELiBTR9Y6iVCsw9jv1_lO5Y3Tcn0Gn9AeAylyzeOvFyx7jPofofvz5Q6poTPscjEuhJ5fhPYNsBmXpDSvWX5TOafvTo1jY5eYDAcB7oxlVCR0S9ikVbRVTTH38tX4qgjbMHAJO4TUncnLJ6TJdIRvY4zuqVe5tBtelKNCaDzcN7VLhJ36DPFt3G8tAaotiDVxkwxNh9E9575r6yVgj4vgA"
                                    />
                                    <span className="text-sm font-semibold text-on-surface">
                                        Google
                                    </span>
                                </button>
                                <button className="flex items-center justify-center gap-3 px-4 py-3 bg-surface-container-high hover:bg-surface-variant transition-colors duration-200 rounded-full group">
                                    <svg
                                        className="w-5 h-5 text-on-surface"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span className="text-sm font-semibold text-on-surface">
                                        GitHub
                                    </span>
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="relative flex items-center mb-8">
                                <div className="flex-grow h-[1px] bg-outline-variant/30" />
                                <span className="flex-shrink mx-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                                    or email
                                </span>
                                <div className="flex-grow h-[1px] bg-outline-variant/30" />
                            </div>

                            {/* Form */}
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <label
                                        className="block text-xs font-bold text-on-surface-variant ml-1 uppercase tracking-wider"
                                        htmlFor="name"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        className="w-full px-5 py-4 bg-surface-container-high border-none rounded-2xl text-on-surface placeholder:text-outline/50 transition-all duration-200"
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        type="text"
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        className="block text-xs font-bold text-on-surface-variant ml-1 uppercase tracking-wider"
                                        htmlFor="email"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        className="w-full px-5 py-4 bg-surface-container-high border-none rounded-2xl text-on-surface placeholder:text-outline/50 transition-all duration-200"
                                        id="email"
                                        name="email"
                                        placeholder="name@company.com"
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        className="block text-xs font-bold text-on-surface-variant ml-1 uppercase tracking-wider"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="w-full px-5 py-4 bg-surface-container-high border-none rounded-2xl text-on-surface placeholder:text-outline/50 transition-all duration-200 pr-12"
                                            id="password"
                                            name="password"
                                            placeholder="••••••••"
                                            type={showPassword ? 'text' : 'password'}
                                            required
                                            minLength={6}
                                            value={form.password}
                                            onChange={handleChange}
                                        />
                                        <button
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors duration-200"
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            <span className="material-symbols-outlined text-[20px]">
                                                {showPassword ? 'visibility_off' : 'visibility'}
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <button
                                        className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                                        type="submit"
                                        disabled={submitting}
                                    >
                                        {submitting ? 'Creating account...' : 'Get Started'}
                                    </button>
                                </div>
                            </form>

                            {/* Sign in link */}
                            <div className="mt-10 text-center">
                                <p className="text-sm text-on-surface-variant">
                                    Already have an account?{' '}
                                    <Link
                                        to="/login"
                                        className="text-primary font-bold hover:underline underline-offset-4 decoration-2"
                                    >
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex items-center justify-center gap-8 py-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">
                                verified_user
                            </span>
                            <span className="text-xs font-bold tracking-tight uppercase">
                                Bank-grade Security
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">
                                diversity_3
                            </span>
                            <span className="text-xs font-bold tracking-tight uppercase">
                                50k+ Members
                            </span>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full py-8 text-center text-xs text-on-surface-variant font-medium tracking-wide">
                <div className="flex justify-center gap-6 mb-2">
                    <a href="#" className="hover:text-primary transition-colors duration-200">
                        Terms of Service
                    </a>
                    <a href="#" className="hover:text-primary transition-colors duration-200">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-primary transition-colors duration-200">
                        Help Center
                    </a>
                </div>
                <p>© 2024 SkillSwap. Crafting the future of P2P learning.</p>
            </footer>
        </div>
    );
}
