import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import Layout from '../components/layout/Layout';
import PublicProfileView from '../components/profile/PublicProfileView';

export default function PublicProfile() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPublicData = async () => {
      try {
        setIsLoading(true);
        setError('');
        
        // Fetch public profile data for the specified user ID
        const res = await api.get(`/users/${userId}`);
        
        if (res.data.success) {
          setUser(res.data.data);
        }
      } catch (err) {
        console.error('Failed to load public profile:', err);
        setError(err.response?.data?.message || 'Failed to load public profile data');
        
        if (err.response?.status === 404) {
          // If user not found, maybe redirect back to Marketplace after a delay
          setTimeout(() => navigate('/marketplace'), 3000);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchPublicData();
    }
  }, [userId, navigate]);

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto mt-20 p-8 bg-red-50 rounded-3xl border border-red-100 text-center">
          <h2 className="text-2xl font-bold text-red-800 mb-2">Error</h2>
          <p className="text-red-600 mb-6">{error}</p>
          <button onClick={() => navigate('/marketplace')} className="bg-red-600 text-white px-6 py-2 rounded-xl font-bold">
            Back to Marketplace
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {user && (
          <PublicProfileView 
            user={user} 
            isOwner={false} // This is always a public view of someone else
          />
        )}
      </div>
    </Layout>
  );
}
