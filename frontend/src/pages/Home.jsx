import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HeroCredits from '../components/home/HeroCredits';
import MentorCard from '../components/home/MentorCard';
import SessionCard from '../components/home/SessionCard';

export default function Home() {
  const mentors = [
    {
      name: 'David Chen',
      role: 'Senior Product Designer @ Meta',
      tags: [
        { label: 'UX Design', colorClass: 'bg-purple-100 text-purple-700' },
        { label: 'Prototyping', colorClass: 'bg-purple-100 text-purple-700' }
      ],
      rating: 4.9,
      reviews: 124,
      rate: 50,
      image: 'https://ui-avatars.com/api/?name=David+Chen&background=1e293b&color=fff'
    },
    {
      name: 'Sarah Jenkins',
      role: 'Frontend Lead @ Vercel',
      tags: [
        { label: 'React', colorClass: 'bg-indigo-100 text-indigo-700' },
        { label: 'Tailwind', colorClass: 'bg-indigo-100 text-indigo-700' }
      ],
      rating: 5.0,
      reviews: 89,
      rate: 80,
      image: 'https://ui-avatars.com/api/?name=Sarah+Jenkins&background=ea580c&color=fff'
    },
    {
      name: 'Marcus Thorne',
      role: 'Data Scientist @ Google',
      tags: [
        { label: 'Python', colorClass: 'bg-purple-100 text-purple-700' },
        { label: 'ML', colorClass: 'bg-purple-100 text-purple-700' }
      ],
      rating: 4.8,
      reviews: 210,
      rate: 120,
      image: 'https://ui-avatars.com/api/?name=Marcus+Thorne&background=0f172a&color=fff'
    }
  ];

  const sessions = [
    {
      date: { month: 'OCT', day: '24' },
      title: 'Advanced React Patterns',
      time: '14:00 - 15:30',
      mentor: 'Sarah Jenkins',
      icon: null // defaults to video icon
    },
    {
      date: { month: 'OCT', day: '27' },
      title: 'Portfolio Review Session',
      time: '10:00 - 11:00',
      mentor: 'David Chen',
      icon: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      )
    }
  ];

  return (
    <Layout>
        <main className="space-y-12">
          <section>
            <HeroCredits />
          </section>

          <section>
            <div className="flex items-end justify-between mb-8 px-2">
              <h2 className="text-2xl font-bold text-slate-900">Top Rated Mentors</h2>
              <Link to="/mentors" className="text-sm font-bold text-blue-600 hover:underline">
                View All &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mentors.map((mentor, index) => (
                <MentorCard key={index} {...mentor} />
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6 px-2">
              <h2 className="text-2xl font-bold text-slate-900">Upcoming Sessions</h2>
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                {sessions.length} Scheduled
              </span>
            </div>
            <div className="space-y-4">
              {sessions.map((session, index) => (
                <SessionCard key={index} {...session} />
              ))}
            </div>
          </section>
        </main>
    </Layout>
  );
}
