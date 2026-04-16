import api from '../api/axios';
import Layout from '../components/layout/Layout';
import ProfileHeader from '../components/profile/ProfileHeader';
import SkillsSection from '../components/profile/SkillsSection';
import AvailabilityCalendar from '../components/profile/AvailabilityCalendar';
import { useState, useEffect } from 'react';
export default function Profile() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const res = await api.get('/users/me');
      if (res.data.success) {
        setUser(res.data.data);
        // Sync localStorage with latest data
        localStorage.setItem('user', JSON.stringify(res.data.data));
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to load profile data';
      setError(msg);

      // If unauthorized, redirect to login after a short delay
      if (err.response?.status === 401) {
        setTimeout(() => window.location.href = '/login', 2500);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateProfile = async (updates) => {
    try {
      let dataToSelect = updates;
      let headers = {};

      if (updates.avatar) {
        const formData = new FormData();
        Object.keys(updates).forEach(key => {
          if (key === 'availability' || key === 'skillsTeach' || key === 'skillsLearn') {
            formData.append(key, JSON.stringify(updates[key]));
          } else {
            formData.append(key, updates[key]);
          }
        });
        dataToSelect = formData;
        headers = { 'Content-Type': 'multipart/form-data' };
      }

      const res = await api.put('/users/me', dataToSelect, { headers });
      if (res.data.success) {
        setUser(res.data.data);
        localStorage.setItem('user', JSON.stringify(res.data.data));
        return true;
      }
      return false;
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update profile');
      return false;
    }
  };

  const handleAddSkillTeach = (skill) => {
    const updatedSkills = [...(user.skillsTeach || []), skill];
    handleUpdateProfile({ skillsTeach: updatedSkills });
  };

  const handleRemoveSkillTeach = (skill) => {
    const updatedSkills = (user.skillsTeach || []).filter(s => s !== skill);
    handleUpdateProfile({ skillsTeach: updatedSkills });
  };

  const handleAddSkillLearn = (skill) => {
    const updatedSkills = [...(user.skillsLearn || []), skill];
    handleUpdateProfile({ skillsLearn: updatedSkills });
  };

  const handleRemoveSkillLearn = (skill) => {
    const updatedSkills = (user.skillsLearn || []).filter(s => s !== skill);
    handleUpdateProfile({ skillsLearn: updatedSkills });
  };

  if (isLoading) return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );

  return (
    <Layout>
      <main className="overflow-hidden p-0">
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-2xl mb-6 border border-red-100 flex items-center gap-3">
            <span className="font-bold">Error:</span> {error}
          </div>
        )}

        {user && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <ProfileHeader
              user={user}
              onUpdate={handleUpdateProfile}
              isEditMode={isEditMode}
              setEditMode={setIsEditMode}
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <SkillsSection
                    title="Skills I Teach"
                    skills={user.skillsTeach}
                    onAdd={handleAddSkillTeach}
                    onRemove={handleRemoveSkillTeach}
                    isEditMode={isEditMode}
                  />
                  <SkillsSection
                    title="Skills I Want to Learn"
                    skills={user.skillsLearn}
                    onAdd={handleAddSkillLearn}
                    onRemove={handleRemoveSkillLearn}
                    isEditMode={isEditMode}
                  />
                </div>

              </div>

              <div className="lg:col-span-1">
                <AvailabilityCalendar
                  availability={user.availability}
                  sessionRate={user.sessionRate}
                  onUpdate={handleUpdateProfile}
                  isEditMode={isEditMode}
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}
