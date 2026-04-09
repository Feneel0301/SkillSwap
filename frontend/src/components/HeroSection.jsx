import { useNavigate } from 'react-router-dom';

const mentorAvatars = [
    {
        alt: 'Mentor 1',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7WDr_yz0T9hy3wuCGyVK5NnsHbZCLfpV649I6rNn4Ae9PeFJMQSCoF4yIDCh5kf-tYXlvkDgQufEPrkIm5qONM588gEDtX9wtRFk_mX2fM1XtfevxTikxKKb8IiON3MUXZuaPq0kNoA4RvCMA9fyC7T1P7pTNyFcafau06mu1dg2am6LvM8-wYSipupxouWH7KnWNS0Ch_Pc5iE4QAcwrT4TcwxwTiddYloivVoYmPF-QwEJ0o48Dn1IUa0gfmT7eDkHticzwQIY',
    },
    {
        alt: 'Mentor 2',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8SAWc7YXoO0hrhpRaKQq-t-WvzjGM-XeHinG7-uNYdHOk7q4NJ6sjdN_AcefXGoLFQOB5YYKiK_n7wzy_oU3VipASSVqcp3vBoynMwWWBncmbmCaf74ZoooCILVIJ72KAv3Zlh4JyH1UBHIKJQn9g2jFP0Xql00JcDEoGpdv-ivHpoE7ds97YYmW7OltYSIvypEHWWztfBeCjUgnAqymT0zs50JKpOuguX42wo7rXEx3esEPJb7FXxsMyD_TWKW6kW41hGxwtnbE',
    },
    {
        alt: 'Mentor 3',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoVEN18kOXbb4SlauGtSRuqFR1HPqhz8la5pqMuhX-GKTgxbTb_CceC6yFa3-zxALHquw1EwJCqdKxYxmqJyf3fGB8whRPuYJ841jY7bsvFgWVakUf0XyzEe6GiRWW_dcScY2UybQo7po6DiuJpZVbAf6_68ao3x-DjYRlAnapCHuqc0kQy6Wy6GztAjMFaWJp4fI0W1d019T3qrXzfMkv6-cbLpBl6Kk1epm9HpaE6VsD4Osrb5rhpYyex-ZX4gUD0_6c3rbD1qQ',
    },
];

const heroImages = [
    {
        alt: 'UX Design Session',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl2aW2THZS-UA0sURK3SLXZEeakgZ8mjqTjaVgUyTpIhXQFMJs2yejIzUYgTQelpyV82yi7ooTJIBUh6-gt4gqZGJYljJ7ffN9giCJsWbWpBm4Q01fRv4LpHaHcAkbq6njmKsKBMfL3coetNS5Y6BtisN00Zp4l_SoLQs7ONOPF7J_k8B16oDqXftsQyayxJuztvgNA3grx0UMb0aIwHnoLEbsWtDupG5DGYb5cmxPLkvlQmlLjFvoR4H_6JoorcZhSehfg8b7Jqk',
        pill: 'UX Design',
        pillBg: 'bg-secondary-fixed text-on-secondary-fixed',
        height: 'h-48',
        rotate: '-rotate-3',
    },
    {
        alt: 'Strategy Session',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVsrd1_9LPJascun7RgcbEXjGjAeirJbeAo4jmtKOc_WwRZPuOvCpDEfEyKT8TdCT7_MqUpWdYmCGZr4VnkSGVnv2LCHnbpG69PwGN-pu7ZSBlo4r44F0BzXuHPVJkidJ7Xi4M0mEs0js3Sq5Zfl29Gd9xUBe4gRMCNILGFw5nzPp_Ie3tyfBEOGMoNiDNLi7Oh4IzVzsO-hYntpP9nxFR7P91IjX2LXYbqRorFaAxc-RuNsKcpd2md8AEzXw95gi52Qe9HA71p1Y',
        pill: 'Business',
        pillBg: 'bg-primary-fixed text-on-primary-fixed',
        height: 'h-32',
        rotate: 'rotate-2',
    },
    {
        alt: 'Culinary Arts',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_k9EtUZ3jmSqljTDIlDPKrUyZMP9qsQimOAqHBEmJl9YuRD5yhOnzldBIXm2mEQ5O80jksaSOAkBqbZPVzcHaeTRuApzpd1T3kGBdpSRNoPM07iHb1ix_iHJHhOo65OG9byutJJFG099eC0JNpe3QVmnnf64NwugYuBUF7U5nRAwsnIG1_VLSngSeTokgI9m-2TU6_UYRhq41t4GZipnEK3ceet79sfw8jFR1YYjd-3u5hLZwessBT_qw3jA1FLkEcdhtIuEHmH0',
        pill: 'Cooking',
        pillBg: 'bg-tertiary-fixed text-on-tertiary-fixed',
        height: 'h-40',
        rotate: 'rotate-3',
    },
    {
        alt: 'Code Mentor',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6uas8bTg6KNKcPFIOMEKTkHyRUg2HPtaVzsYv6M1GdVtL0-ReL1nfjixOMponb4TT72D3MLsZj_rMAM3cTXqbbIEvizeJQDDQLQoDPLiMSBFgA8cqNT4hm60U2Aft8xmpz8JVH88rGgwiAwLYDYzMPtJw0Ggz2FGFiVjOeOTTloQfpEZhu-SYzi9iin0XoZyJOSVZuonLikX1rJesVDWGwe3iQyQs8NDx5nIHhqYM9TYzWsJni_-2sR1RUrBYeCHsvlHH0Z5Q8FU',
        pill: 'Programming',
        pillBg: 'bg-secondary-fixed text-on-secondary-fixed',
        height: 'h-56',
        rotate: '-rotate-2',
    },
];

export default function HeroSection() {
    const navigate = useNavigate();

    return (
        <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Copy */}
                <div className="z-10">
                    <h1 className="font-headline text-5xl lg:text-7xl font-extrabold tracking-tight text-on-surface mb-6 leading-[1.1]">
                        Learn Anything. <br />
                        <span className="text-primary">Teach Everything.</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-on-surface-variant mb-10 max-w-xl leading-relaxed">
                        Join the world's most tactile wisdom exchange. Master new crafts
                        through high-definition live sessions or share your expertise to
                        earn credits.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => navigate('/register')}
                            className="hero-gradient text-on-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 active:scale-95"
                        >
                            Start Learning
                        </button>
                        <button
                            onClick={() => navigate('/login')}
                            className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-container-high transition-all duration-300 active:scale-95"
                        >
                            Start Teaching
                        </button>
                    </div>

                    {/* Social Proof */}
                    <div className="mt-12 flex items-center gap-4">
                        <div className="flex -space-x-3">
                            {mentorAvatars.map((avatar) => (
                                <img
                                    key={avatar.alt}
                                    alt={avatar.alt}
                                    className="w-10 h-10 rounded-full border-2 border-surface object-cover"
                                    src={avatar.src}
                                />
                            ))}
                        </div>
                        <p className="text-sm text-on-surface-variant font-medium">
                            Joined by{' '}
                            <span className="text-primary font-bold">12,000+</span> curators
                            this week
                        </p>
                    </div>
                </div>

                {/* Right: Image Grid */}
                <div className="relative">
                    {/* Decorative blobs */}
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary-fixed/30 blur-3xl rounded-full pointer-events-none" />
                    <div className="absolute -bottom-20 -left-10 w-64 h-64 bg-primary-fixed/20 blur-3xl rounded-full pointer-events-none" />

                    <div className="relative grid grid-cols-2 gap-4">
                        {/* Column 1 */}
                        <div className="space-y-4 pt-12">
                            {heroImages.slice(0, 2).map((img) => (
                                <div
                                    key={img.alt}
                                    className={`bg-surface-container-lowest rounded-lg p-2 ambient-shadow transform ${img.rotate} transition-transform duration-500 hover:rotate-0`}
                                >
                                    <img
                                        alt={img.alt}
                                        className={`rounded-[1rem] w-full ${img.height} object-cover`}
                                        src={img.src}
                                    />
                                    <div className="p-3">
                                        <span
                                            className={`${img.pillBg} text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider`}
                                        >
                                            {img.pill}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Column 2 */}
                        <div className="space-y-4">
                            {heroImages.slice(2, 4).map((img) => (
                                <div
                                    key={img.alt}
                                    className={`bg-surface-container-lowest rounded-lg p-2 ambient-shadow transform ${img.rotate} transition-transform duration-500 hover:rotate-0`}
                                >
                                    <img
                                        alt={img.alt}
                                        className={`rounded-[1rem] w-full ${img.height} object-cover`}
                                        src={img.src}
                                    />
                                    <div className="p-3">
                                        <span
                                            className={`${img.pillBg} text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider`}
                                        >
                                            {img.pill}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
