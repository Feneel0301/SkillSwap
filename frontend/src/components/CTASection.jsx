import { useNavigate } from 'react-router-dom';

export default function CTASection() {
    const navigate = useNavigate();

    return (
        <section className="py-24 px-6">
            <div className="max-w-5xl mx-auto hero-gradient rounded-xl p-12 lg:p-20 text-center relative overflow-hidden">
                {/* Dot pattern overlay */}
                <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }}
                />

                <div className="relative z-10">
                    <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-on-primary mb-6">
                        Ready to swap skills?
                    </h2>
                    <p className="text-on-primary/80 text-lg mb-10 max-w-xl mx-auto">
                        Join thousands of learners and teachers in the world's most dynamic
                        exchange network.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => navigate('/register')}
                            className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-fixed transition-colors duration-300 shadow-lg active:scale-95"
                        >
                            Create Free Account
                        </button>
                        <button className="bg-primary-container text-on-primary border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/80 transition-colors duration-300 active:scale-95">
                            Learn How it Works
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
