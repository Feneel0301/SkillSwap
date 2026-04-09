import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
    const { user, updateProfile, updateSkills, loading: authLoading } = useAuth();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        title: '',
        bio: '',
        location: '',
        profileImage: ''
    });

    const [newTeachSkill, setNewTeachSkill] = useState({ name: '', level: 'beginner' });
    const [newLearnSkill, setNewLearnSkill] = useState('');
    const [isAddingTeach, setIsAddingTeach] = useState(false);
    const [isAddingLearn, setIsAddingLearn] = useState(false);

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || '',
                title: user.title || '',
                bio: user.bio || '',
                location: user.location || '',
                profileImage: user.profileImage || ''
            });
        }
    }, [user]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleProfileSubmit = async (e) => {
        if (e) e.preventDefault();
        setSaving(true);
        setError(null);
        try {
            await updateProfile(formData);
            setIsEditing(false);
        } catch (err) {
            setError(err.message || 'Failed to update profile');
        } finally {
            setSaving(false);
        }
    };

    const handleAddTeachSkill = async () => {
        if (!newTeachSkill.name.trim()) return;
        setSaving(true);
        try {
            const updatedSkillsTeach = [...(user.skillsTeach || []), newTeachSkill];
            await updateSkills({ skillsTeach: updatedSkillsTeach, skillsLearn: user.skillsLearn });
            setNewTeachSkill({ name: '', level: 'beginner' });
            setIsAddingTeach(false);
        } catch (err) {
            setError(err.message || 'Failed to add skill');
        } finally {
            setSaving(false);
        }
    };

    const handleAddLearnSkill = async () => {
        if (!newLearnSkill.trim()) return;
        setSaving(true);
        try {
            const updatedSkillsLearn = [...(user.skillsLearn || []), newLearnSkill];
            await updateSkills({ skillsTeach: user.skillsTeach, skillsLearn: updatedSkillsLearn });
            setNewLearnSkill('');
            setIsAddingLearn(false);
        } catch (err) {
            setError(err.message || 'Failed to add skill');
        } finally {
            setSaving(false);
        }
    };

    const handleRemoveSkill = async (type, index) => {
        setSaving(true);
        try {
            let updatedTeach = [...(user.skillsTeach || [])];
            let updatedLearn = [...(user.skillsLearn || [])];

            if (type === 'teach') updatedTeach.splice(index, 1);
            else updatedLearn.splice(index, 1);

            await updateSkills({ skillsTeach: updatedTeach, skillsLearn: updatedLearn });
        } catch (err) {
            setError(err.message || 'Failed to remove skill');
        } finally {
            setSaving(false);
        }
    };

    if (authLoading && !user) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-surface">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="bg-surface text-on-surface min-h-screen relative">
            <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden opacity-30">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px]" />
            </div>

            <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-xl shadow-black/5 flex justify-between items-center px-6 py-4">
                <div className="flex items-center gap-8">
                    <span className="text-2xl font-black tracking-tight text-primary font-headline cursor-pointer" onClick={() => navigate('/')}>SkillSwap</span>
                    <div className="hidden md:flex items-center gap-6">
                        <button onClick={() => navigate('/dashboard')} className="text-on-surface-variant font-medium hover:text-primary transition-colors">Dashboard</button>
                        <button className="text-on-surface-variant font-medium hover:text-primary transition-colors">Marketplace</button>
                        <button className="text-primary font-bold border-b-2 border-primary py-1">Profile</button>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary text-xs font-bold ring-2 ring-primary/20 ring-offset-2 ring-offset-surface">
                        {user.name?.charAt(0).toUpperCase()}
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-12 px-6 max-w-5xl mx-auto">
                <div className="space-y-8">
                    <section className="relative bg-surface-container-lowest rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/5 border border-outline-variant/10 overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-end">
                            <div className="w-40 h-40 md:w-56 md:h-56 bg-surface-container-high rounded-2xl overflow-hidden shadow-2xl border-4 border-surface ring-1 ring-outline-variant/20">
                                {user.profileImage ? (
                                    <img src={user.profileImage} alt={user.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-container to-secondary-container text-on-primary-container text-6xl font-black font-headline">
                                        {user.name?.charAt(0).toUpperCase()}
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 space-y-4">
                                {isEditing ? (
                                    <div className="space-y-4">
                                        <input name="name" value={formData.name} onChange={handleChange} className="w-full text-4xl font-black tracking-tight bg-surface-container-high border-none rounded-xl px-4 py-2" placeholder="Your Name" />
                                        <input name="title" value={formData.title} onChange={handleChange} className="w-full text-lg bg-surface-container-high border-none rounded-xl px-4 py-2" placeholder="Title (e.g. UX Designer)" />
                                        <input name="location" value={formData.location} onChange={handleChange} className="w-full text-sm bg-surface-container-high border-none rounded-xl px-4 py-2" placeholder="Location" />
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex items-center gap-3">
                                            <h1 className="text-4xl md:text-5xl font-black tracking-tighter font-headline">{user.name}</h1>
                                        </div>
                                        {user.title && <p className="text-xl font-medium text-on-surface-variant font-headline">{user.title}</p>}
                                        <p className="flex items-center gap-1 text-on-surface-variant font-medium">
                                            <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
                                            {user.location || 'Remote'}
                                        </p>
                                    </>
                                )}
                            </div>

                            <div className="flex flex-col gap-3 w-full md:w-auto min-w-[160px]">
                                {isEditing ? (
                                    <>
                                        <button onClick={handleProfileSubmit} disabled={saving} className="bg-primary text-on-primary py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all disabled:opacity-50">
                                            {saving ? 'Saving...' : 'Save Changes'}
                                        </button>
                                        <button onClick={() => setIsEditing(false)} className="bg-surface-container-highest text-on-surface py-4 rounded-full font-bold hover:bg-surface-variant transition-colors">Cancel</button>
                                    </>
                                ) : (
                                    <button onClick={() => setIsEditing(true)} className="bg-primary text-on-primary py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">Edit Profile</button>
                                )}
                            </div>
                        </div>
                    </section>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
                                <h3 className="text-[12px] font-black uppercase tracking-widest text-primary mb-4 font-headline">Professional Bio</h3>
                                {isEditing ? (
                                    <textarea name="bio" value={formData.bio} onChange={handleChange} className="w-full h-32 bg-surface-container-lowest border-none rounded-xl p-4 resize-none" placeholder="Tell us about yourself..." />
                                ) : (
                                    <p className="text-on-surface-variant leading-relaxed text-lg">{user.bio || 'No bio added yet.'}</p>
                                )}
                            </div>

                            {/* Skills I Teach */}
                            <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-[12px] font-black uppercase tracking-widest text-primary font-headline">Skills I Teach</h3>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {user.skillsTeach?.map((skill, index) => (
                                        <div key={index} className="px-4 py-2 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20 flex items-center gap-2 group">
                                            {skill.name} <span className="opacity-50">• {skill.level}</span>
                                            <button onClick={() => handleRemoveSkill('teach', index)} className="material-symbols-outlined text-sm hover:text-error transition-colors">close</button>
                                        </div>
                                    ))}
                                </div>
                                {isAddingTeach ? (
                                    <div className="p-4 bg-surface-container-lowest rounded-xl flex flex-wrap gap-3 items-center animate-in fade-in slide-in-from-top-2 duration-300">
                                        <input value={newTeachSkill.name} onChange={(e) => setNewTeachSkill({ ...newTeachSkill, name: e.target.value })} className="bg-surface-container-high border-none rounded-lg px-3 py-2 text-sm flex-1" placeholder="Skill Name" />
                                        <select value={newTeachSkill.level} onChange={(e) => setNewTeachSkill({ ...newTeachSkill, level: e.target.value })} className="bg-surface-container-high border-none rounded-lg px-3 py-2 text-sm">
                                            <option value="beginner">Beginner</option>
                                            <option value="intermediate">Intermediate</option>
                                            <option value="expert">Expert</option>
                                        </select>
                                        <button onClick={handleAddTeachSkill} className="px-4 py-2 bg-primary text-on-primary rounded-lg text-xs font-bold">Add</button>
                                        <button onClick={() => setIsAddingTeach(false)} className="px-4 py-2 text-on-surface-variant text-xs font-bold">Cancel</button>
                                    </div>
                                ) : (
                                    <button onClick={() => setIsAddingTeach(true)} className="px-5 py-2.5 border-2 border-dashed border-outline-variant text-[11px] font-black uppercase tracking-wider rounded-xl hover:border-primary hover:text-primary transition-all">Add Teaching Skill</button>
                                )}
                            </div>

                            {/* Skills I Learn */}
                            <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
                                <h3 className="text-[12px] font-black uppercase tracking-widest text-secondary mb-6 font-headline">Skills I Want to Learn</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {user.skillsLearn?.map((skill, index) => (
                                        <div key={index} className="px-4 py-2 bg-secondary/10 text-secondary text-xs font-bold rounded-full border border-secondary/20 flex items-center gap-2">
                                            {skill}
                                            <button onClick={() => handleRemoveSkill('learn', index)} className="material-symbols-outlined text-sm hover:text-error transition-colors">close</button>
                                        </div>
                                    ))}
                                </div>
                                {isAddingLearn ? (
                                    <div className="p-4 bg-surface-container-lowest rounded-xl flex gap-3 items-center animate-in fade-in slide-in-from-top-2">
                                        <input value={newLearnSkill} onChange={(e) => setNewLearnSkill(e.target.value)} className="bg-surface-container-high border-none rounded-lg px-3 py-2 text-sm flex-1" placeholder="e.g. AI Strategy" />
                                        <button onClick={handleAddLearnSkill} className="px-4 py-2 bg-secondary text-on-secondary rounded-lg text-xs font-bold">Add</button>
                                        <button onClick={() => setIsAddingLearn(false)} className="px-4 py-2 text-on-surface-variant text-xs font-bold">Cancel</button>
                                    </div>
                                ) : (
                                    <button onClick={() => setIsAddingLearn(true)} className="px-5 py-2.5 border-2 border-dashed border-outline-variant text-[11px] font-black uppercase tracking-wider rounded-xl hover:border-secondary hover:text-secondary transition-all">Add Learning Interest</button>
                                )}
                            </div>
                        </div>

                        <aside className="space-y-6">
                            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-xl shadow-black/5 border border-outline-variant/10">
                                <h3 className="text-[12px] font-black uppercase tracking-widest text-primary mb-6 font-headline">Community Trust</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-600"><span className="material-symbols-outlined">verified_user</span></div>
                                        <div><p className="text-sm font-bold">Identity Verified</p><p className="text-[10px] text-on-surface-variant uppercase font-medium">Safe Member</p></div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600"><span className="material-symbols-outlined">history</span></div>
                                        <div><p className="text-sm font-bold">Member Since</p><p className="text-[10px] text-on-surface-variant uppercase font-medium">{new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p></div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform"></div>
                                <h3 className="text-xl font-bold mb-4 font-headline">Credit Balance</h3>
                                <div className="text-5xl font-black mb-2">{user.credits?.toLocaleString() || '0'}</div>
                                <p className="text-xs font-medium opacity-70 uppercase tracking-widest">Available to Swap</p>
                                <button className="mt-6 w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg text-xs font-bold transition-colors">View Transactions</button>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            {error && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-error text-on-error px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 animate-in slide-in-from-bottom-10">
                    <span className="material-symbols-outlined">error</span>
                    <span className="font-bold text-sm">{error}</span>
                    <button onClick={() => setError(null)} className="material-symbols-outlined text-sm">close</button>
                </div>
            )}
        </div>
    );
}
