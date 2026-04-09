import { useState } from 'react';

const testimonials = [
    {
        quote:
            '"I taught three sessions of Python basics and earned enough credits to learn French Cooking and advanced UI design. The trade-off is incredibly empowering."',
        name: 'Julian Rivera',
        role: 'Full-stack Developer',
        avatar:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBxEdk2zDWq2pHij2lQg33Y6i27pXJbG4EX1U1XUQKN_PUl5Eci3If0wFqxrMB6XSpBnJzSKbYd8CNxGKGzN6DukQ36AmX5gSIyJpHPx_lgrlUCiJBcIPd7et3-QIzUxrWAm95nNqg8pokAcDHW58OBMwJNkm4uBLljDJYNxa0vktAZ8UDwP0pcD8foOchat5IW5xVyJAYXZK76dlN8mSW86hXyL2r2BsEoh18FW3njbWOtg_cmFahvKqIFRtCdkJ5bHIdMdI-QL5E',
    },
    {
        quote:
            '"The live sessions are a game changer. Being able to ask questions and get instant feedback made me learn faster than any pre-recorded course ever could."',
        name: 'Sarah Chen',
        role: 'Content Strategist',
        avatar:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuARSDEY856zNTB73hDMqZYbBs7jPvaOYC-8_L09m3pIBpE5hJLzbc1AAP6seQ0zx1oWhq9eYstv-fI53YLEZtKcxXnltO0QiPvhkRQ6tXo7WW3fSYbphKd71-2v-Y-AWmzC7nbMB23PploRhY7LAvZzOsiKOheYdkyW7WK5xyn2jzwBmsgBB-NzjrTmtjtALr-7TS-skztOOrUUj5FUxpEzDJH848wxptPjuqaO7d6-4ss56uMUKOIYI5DZUhtg5lj5HIMUHCD17_Y',
    },
    {
        quote:
            '"Teaching on SkillSwap helped me refine my own skills while building a global network. It\'s more than a learning platform; it\'s a real community."',
        name: 'Marcus Thorne',
        role: 'Executive Coach',
        avatar:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuArHSnKu2nYjzo4TwBgjK72lul7ddSunxwFS9vpkd805blt7NQIi_IfTpeF9t5Ccc34FpSe9JYgydXab5sCZ7iYh7iwd8S2var7IeP40AnC_1pi9XAYXw9D1RqVf-HGoIziKUoBr3B5oRtSxtXKdegQ2M5V4NWCfw8NcC8hL0qfVhqVtRYt9ttvRskbDS1V1wT65oh9-uchp5Oesi1HQ3e2ASH0HfVD1J9HDSxawrkLvP6T8NuOjixoINKcy_wCZXbkEJpbAUvSQZg',
    },
];

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const goPrev = () =>
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    const goNext = () =>
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

    return (
        <section className="py-24 px-6 bg-surface">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="font-headline text-4xl font-bold mb-2">
                            Voices of Wisdom
                        </h2>
                        <p className="text-on-surface-variant">
                            See how SkillSwap is transforming personal growth.
                        </p>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <button
                            onClick={goPrev}
                            className="p-3 bg-surface-container-high rounded-full hover:bg-surface-container-highest transition-colors duration-200"
                            aria-label="Previous testimonial"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <button
                            onClick={goNext}
                            className="p-3 bg-primary text-on-primary rounded-full hover:bg-primary-container transition-colors duration-200"
                            aria-label="Next testimonial"
                        >
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div
                            key={t.name}
                            className={`bg-surface-container-low p-8 rounded-lg relative transition-all duration-500 ${idx === activeIndex
                                    ? 'scale-[1.02] ambient-shadow'
                                    : 'scale-100'
                                }`}
                        >
                            <span className="material-symbols-outlined text-primary-fixed-dim text-6xl absolute -top-4 -left-2 opacity-50 select-none">
                                format_quote
                            </span>
                            <p className="text-on-surface italic mb-8 relative z-10 leading-relaxed">
                                {t.quote}
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                    src={t.avatar}
                                />
                                <div>
                                    <p className="font-bold">{t.name}</p>
                                    <p className="text-xs text-on-surface-variant">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
