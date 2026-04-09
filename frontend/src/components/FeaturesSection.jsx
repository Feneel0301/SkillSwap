export default function FeaturesSection() {
    return (
        <section className="py-24 px-6 bg-surface-container-low">
            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <h2 className="font-headline text-4xl font-bold mb-4">
                        A Platform Built for Mastery
                    </h2>
                    <p className="text-on-surface-variant">
                        We've removed the barriers to peer-to-peer education with a
                        seamless ecosystem of exchange.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Feature 1: Credit System — spans 2 cols */}
                    <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-lg ambient-shadow relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="bg-primary-fixed w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-primary">
                                <span className="material-symbols-outlined text-3xl">
                                    payments
                                </span>
                            </div>
                            <h3 className="font-headline text-2xl font-bold mb-3">
                                Seamless Credit System
                            </h3>
                            <p className="text-on-surface-variant max-w-md leading-relaxed">
                                No direct payments required. Earn credits by teaching what you
                                love, then spend them to learn from world-class experts across
                                the globe.
                            </p>
                        </div>
                        <div className="absolute -right-10 -bottom-10 w-64 h-64 opacity-5 group-hover:scale-110 transition-transform duration-700">
                            <span className="material-symbols-outlined text-[200px]">
                                currency_exchange
                            </span>
                        </div>
                    </div>

                    {/* Feature 2: Live Sessions */}
                    <div className="bg-primary text-on-primary p-10 rounded-lg ambient-shadow flex flex-col justify-between">
                        <div>
                            <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-3xl">
                                    event_available
                                </span>
                            </div>
                            <h3 className="font-headline text-2xl font-bold mb-3">
                                Live Sessions
                            </h3>
                            <p className="text-on-primary/80 leading-relaxed">
                                Real-time feedback and interactive workshops. No more passive
                                watching.
                            </p>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/10">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-error animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-widest">
                                    48 Sessions Live Now
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3: Community */}
                    <div className="bg-surface-container-lowest p-10 rounded-lg ambient-shadow md:col-span-1">
                        <div className="bg-secondary-fixed w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-secondary">
                            <span className="material-symbols-outlined text-3xl">
                                groups
                            </span>
                        </div>
                        <h3 className="font-headline text-2xl font-bold mb-3">
                            Global Community
                        </h3>
                        <p className="text-on-surface-variant leading-relaxed">
                            Join focus groups and niche circles to grow alongside peers who
                            share your passions.
                        </p>
                    </div>

                    {/* Feature 4: Mentor — spans 2 cols */}
                    <div className="md:col-span-2 bg-secondary-container text-on-secondary-container p-10 rounded-lg ambient-shadow relative overflow-hidden">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <h3 className="font-headline text-2xl font-bold mb-3">
                                    Find Your Ideal Mentor
                                </h3>
                                <p className="opacity-90 leading-relaxed">
                                    Our curator status ensures you learn from verified experts.
                                    Filter by skill, rating, or language to find the perfect match
                                    for your learning journey.
                                </p>
                                <button className="mt-6 bg-white text-secondary-container px-6 py-2 rounded-full font-bold text-sm hover:bg-secondary-fixed transition-colors duration-200 active:scale-95">
                                    Explore Mentors
                                </button>
                            </div>
                            <div className="flex-shrink-0">
                                <img
                                    alt="Mentor matching"
                                    className="w-48 h-48 rounded-lg object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbag8sfs4-dYiJjPUyQlirNe0_I8kW6gvx7V2uBy1xnTuklBxuorHU1SIgObX3-FL7T_516cHf7eellbeSRlRixrpftPwvUNOpP0mxmsODROBYmZyUboixUohl09feRw3T39a4okVGyj3DWu-ejukceNpSV4bhhcp5hsfFGrCoKDXlZj_Y1E_Rb6-6sZX1_ea_Z-rmXR5mGRXFINYw_tiKP8UCgb7ZJUr6jVWU8iCn4EKTR0s7XEq3iCuUIwcK4wJRgj-vTLP07mo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
