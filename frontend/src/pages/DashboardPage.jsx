import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function DashboardPage() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    // Static fallback data for missing backend parts
    const mentors = [
        {
            id: 1,
            name: 'David Chen',
            role: 'Senior Product Designer @ Meta',
            skills: ['UX Design', 'Prototyping'],
            rating: 4.9,
            reviews: 124,
            price: 50,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZXGjfM8DnstuxBLLNIUAVv44bWFqCsFacp5wI6XBVcZ9SyMFCcuYPmJbyIA-utX2IN2WXTiBKBzF-qq8s45CVPTThC_QK9Dt90f41-WrbCsFjcu_v7yzXthEvkgw6pnq1FoA2-r0TcGScaSZ34YmDfvxjffWVIZLry2qdBTZOkWyoUrt2wb2Kctft_yHwYGPVjOK66ahAktuFd1o8VfrEsgSriEVj4f9_BT8BdKs9EqVxbfNVc86ed1B5_GFd6-3TflYAdD5txkY'
        },
        {
            id: 2,
            name: 'Sarah Jenkins',
            role: 'Frontend Lead @ Vercel',
            skills: ['React', 'Tailwind'],
            rating: 5.0,
            reviews: 89,
            price: 80,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzImcNWCHSfXXuyNUvNwY3eognbw7OeXiRTNLBSeeyJ2glxTBOK3qmrGtuVgxq4acYnvZDV22fIs1hWrkhWZbBXPvrPY_a4dUQr1Vsrs_RhWpDCdk5aqXeUB_ntIdDvVHK7iOUFTdaxbeTDM_-3IRAxkLUFTTVxtOB0jsJXfh_fWycTLcdvEtgTv9xdxQxYhnKOIhLn60UPKblr1yHYSP4YJtyp1qcU8Ut28P9SunqPKVQvMuRgG3ZxTkEy6qZxJI6-AmLnSHZzbw'
        },
        {
            id: 3,
            name: 'Marcus Thorne',
            role: 'Data Scientist @ Google',
            skills: ['Python', 'ML'],
            rating: 4.8,
            reviews: 210,
            price: 120,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcz3ipq1gAx02CultvWQtDpADhbduIDRqlRr4T3CMRtfnJgF-XckVBfYS8LcGWSUYh1DNPPHaZRK-dabIuuww1nZ8ihnp9bBOU7vcg4shK4l4QnrtPSIhQPO9yIoL7uk7MK4sdFSefK4-Qc2P0l9HbGfUsMTDJbjPqMQ4SmmG90zjaXSkHfCuXGEkmYDO6oFoc9MSdCVGg0nJOOMG6M6oysgUzmAoP_kcbQVzMZB4vjoANAD4o-SKd4wjPyQhX6KDAhxRwTKsBZtw'
        }
    ];

    const sessions = [
        {
            id: 1,
            title: 'Advanced React Patterns',
            date: 'Oct 24',
            time: '14:00 - 15:30',
            mentor: 'Sarah Jenkins',
            type: 'video_call'
        },
        {
            id: 2,
            title: 'Portfolio Review Session',
            date: 'Oct 27',
            time: '10:00 - 11:00',
            mentor: 'David Chen',
            type: 'calendar_today'
        }
    ];

    return (
        <div className="bg-surface text-on-surface min-h-screen">
            {/* TopNavBar */}
            <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md flex justify-between items-center px-6 py-4 shadow-xl shadow-black/5">
                <div className="flex items-center gap-8">
                    <span
                        className="text-2xl font-black tracking-tight text-primary font-headline cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        SkillSwap
                    </span>
                    <div className="hidden md:flex items-center gap-6">
                        <a className="text-primary font-bold border-b-2 border-primary font-label" href="#">Home</a>
                        <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label" href="#">Marketplace</a>
                        <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label" href="#">Sessions</a>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {/* Credit Balance */}
                    <div className="bg-surface-container-high px-4 py-2 rounded-full flex items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary">payments</span>
                        <span className="font-bold text-on-surface">{user.credits?.toLocaleString() || '0'}</span>
                    </div>

                    <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors active:scale-95 duration-150">
                        <span className="material-symbols-outlined">account_balance_wallet</span>
                    </button>

                    <div
                        className="flex items-center gap-3 bg-surface-container-high pl-1 pr-4 py-1 rounded-full cursor-pointer hover:bg-surface-variant transition-colors"
                        onClick={() => navigate('/profile')}
                    >
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary text-xs font-bold">
                            {user.name?.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-sm font-bold font-label text-on-surface">Profile</span>
                    </div>
                </div>
            </nav>

            {/* SideNavBar (Hidden on mobile) */}
            <aside className="hidden md:flex h-screen w-64 fixed left-0 top-0 bg-surface-container-low flex flex-col gap-2 p-4 pt-24 z-40 border-r border-outline-variant/10">
                <div className="px-4 mb-8">
                    <h2 className="font-headline text-xl font-bold text-primary">Welcome, {user.name?.split(' ')[0]}</h2>
                    <p className="text-xs text-on-surface-variant font-label">Premium Curator Status</p>
                </div>
                <nav className="flex flex-col gap-1">
                    <a className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-full font-bold transition-transform duration-200 hover:translate-x-1" href="#">
                        <span className="material-symbols-outlined">home</span>
                        <span className="font-label">Home</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-transform duration-200 hover:translate-x-1" href="#">
                        <span className="material-symbols-outlined">storefront</span>
                        <span className="font-label">Marketplace</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-transform duration-200 hover:translate-x-1" href="#">
                        <span className="material-symbols-outlined">event_available</span>
                        <span className="font-label">Sessions</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-transform duration-200 hover:translate-x-1" href="#">
                        <span className="material-symbols-outlined">chat_bubble</span>
                        <span className="font-label">Messages</span>
                    </a>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 text-error hover:bg-error/10 rounded-full transition-transform duration-200 hover:translate-x-1 mt-auto"
                    >
                        <span className="material-symbols-outlined">logout</span>
                        <span className="font-label">Logout</span>
                    </button>
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="md:ml-64 pt-24 px-6 pb-12">
                <div className="max-w-7xl mx-auto space-y-10">

                    {/* Hero Bento Section */}
                    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Credit Balance Card */}
                        <div className="lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-primary to-secondary p-8 rounded-lg flex flex-col justify-between min-h-[280px] shadow-2xl shadow-primary/20">
                            <div className="absolute top-0 right-0 p-12 opacity-10">
                                <span className="material-symbols-outlined text-[12rem]">payments</span>
                            </div>
                            <div className="relative z-10">
                                <span className="text-white/70 font-label tracking-widest uppercase text-xs">Total Balance</span>
                                <h1 className="text-6xl font-headline font-extrabold text-white mt-2 tracking-tighter">
                                    {user.credits?.toLocaleString() || '0'} <span className="text-2xl font-normal opacity-70">Credits</span>
                                </h1>
                            </div>
                            <div className="relative z-10 flex gap-4 mt-8">
                                <button className="px-6 py-3 bg-white text-primary font-bold rounded-full hover:bg-surface-container-low transition-colors">Buy Credits</button>
                                <button className="px-6 py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-full hover:bg-white/20 transition-colors">History</button>
                            </div>
                        </div>

                        {/* Quick Actions Bento */}
                        <div className="bg-surface-container-low rounded-lg p-6 flex flex-col gap-4">
                            <h3 className="font-headline font-bold text-xl px-2">Quick Actions</h3>
                            <button className="group flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl hover:bg-primary transition-all duration-300 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary group-hover:bg-white/20 group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">calendar_add_on</span>
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-on-surface group-hover:text-white transition-colors">Book session</p>
                                        <p className="text-xs text-on-surface-variant group-hover:text-white/70 transition-colors">Find a mentor time</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-outline-variant group-hover:text-white transition-colors">chevron_right</span>
                            </button>
                            <button className="group flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl hover:bg-secondary transition-all duration-300 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary group-hover:bg-white/20 group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">add_circle</span>
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-on-surface group-hover:text-white transition-colors">Add skill</p>
                                        <p className="text-xs text-on-surface-variant group-hover:text-white/70 transition-colors">Update your profile</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-outline-variant group-hover:text-white transition-colors">chevron_right</span>
                            </button>
                        </div>
                    </section>

                    {/* Suggested Mentors */}
                    <section>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-3xl font-headline font-extrabold tracking-tight">Top Rated Mentors</h2>
                            <button className="text-primary font-bold flex items-center gap-1 hover:underline">
                                View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                        <div className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar snap-x">
                            {mentors.map((mentor) => (
                                <div key={mentor.id} className="min-w-[300px] snap-start relative pt-4">
                                    <div className="bg-surface-container-lowest rounded-lg p-6 shadow-xl shadow-black/5 hover:-translate-y-1 transition-transform">
                                        <img alt={mentor.name} className="absolute -top-4 left-6 w-16 h-16 rounded-full border-4 border-surface shadow-lg object-cover" src={mentor.image} />
                                        <div className="mt-8 space-y-4">
                                            <div>
                                                <h4 className="font-headline font-bold text-lg">{mentor.name}</h4>
                                                <p className="text-sm text-on-surface-variant">{mentor.role}</p>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {mentor.skills.map((skill) => (
                                                    <span key={skill} className="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed text-xs font-bold rounded-full">{skill}</span>
                                                ))}
                                            </div>
                                            <div className="flex items-center justify-between pt-2">
                                                <span className="flex items-center gap-1 text-sm font-bold text-tertiary">
                                                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> {mentor.rating} ({mentor.reviews})
                                                </span>
                                                <span className="text-primary font-bold">{mentor.price} c/hr</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Upcoming Sessions & Progress */}
                    <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-headline font-extrabold">Upcoming Sessions</h2>
                                <span className="bg-primary-fixed text-on-primary-fixed text-xs px-3 py-1 rounded-full font-bold">{sessions.length} Scheduled</span>
                            </div>
                            <div className="space-y-4">
                                {sessions.map((session) => (
                                    <div key={session.id} className="bg-surface-container-low p-5 rounded-lg flex items-center justify-between hover:bg-surface-container-high transition-colors cursor-pointer group">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 rounded-2xl bg-white flex flex-col items-center justify-center shadow-sm">
                                                <span className="text-xs font-bold text-error uppercase">{session.date.split(' ')[0]}</span>
                                                <span className="text-2xl font-headline font-black">{session.date.split(' ')[1]}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">{session.title}</h4>
                                                <p className="text-sm text-on-surface-variant flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-sm">schedule</span> {session.time} • With {session.mentor}
                                                </p>
                                            </div>
                                        </div>
                                        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all">
                                            <span className="material-symbols-outlined">{session.type}</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Learning Progress & Skills */}
                        <div className="bg-surface-container-lowest rounded-lg p-8 shadow-xl shadow-black/5 flex flex-col gap-6">
                            <h3 className="font-headline font-bold text-xl">Learning Progress</h3>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm font-bold">
                                        <span>Overall Course Completion</span>
                                        <span className="text-primary">65%</span>
                                    </div>
                                    <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                                        <div className="h-full bg-primary rounded-full w-[65%]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6 border-t border-outline-variant/10">
                                <p className="text-sm font-bold text-on-surface-variant mb-4">My Skills to Learn</p>
                                <div className="flex flex-wrap gap-2">
                                    {user.skillsLearn?.length > 0 ? (
                                        user.skillsLearn.map((skill) => (
                                            <span key={skill} className="px-4 py-2 bg-surface-container text-on-surface text-xs font-bold rounded-full">{skill}</span>
                                        ))
                                    ) : (
                                        <span className="text-xs text-on-surface-variant italic">No skills added yet</span>
                                    )}
                                    <button className="p-2 border-2 border-dashed border-outline-variant text-outline rounded-full hover:border-primary hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-sm">add</span>
                                    </button>
                                </div>
                            </div>
                            <div className="pt-2">
                                <p className="text-sm font-bold text-on-surface-variant mb-4">Skills I Can Teach</p>
                                <div className="flex flex-wrap gap-2">
                                    {user.skillsTeach?.length > 0 ? (
                                        user.skillsTeach.map((skill) => (
                                            <span key={skill.name} className="px-4 py-2 bg-secondary-fixed text-on-secondary-fixed text-xs font-bold rounded-full">{skill.name}</span>
                                        ))
                                    ) : (
                                        <span className="text-xs text-on-surface-variant italic">No teaching skills added yet</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            {/* FAB - Mobile Only */}
            <button className="md:hidden fixed bottom-6 right-6 w-16 h-16 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center z-50">
                <span className="material-symbols-outlined text-3xl">search</span>
            </button>
        </div>
    );
}
