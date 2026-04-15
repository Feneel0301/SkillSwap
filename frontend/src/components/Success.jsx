import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    navigate('/');
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: '20px' }}>
      <h1 style={{ color: 'green' }}>Successfully Logged In!</h1>
      <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
        <img src={user.avatarUrl} alt={user.displayName} style={{ width: '100px', borderRadius: '50%' }} />
        <h2>{user.displayName}</h2>
        <p>{user.email}</p>
      </div>
      <button 
        onClick={handleLogout}
        style={{ padding: '10px 20px', backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Logout
      </button>
    </div>
  );
};

export default Success;
