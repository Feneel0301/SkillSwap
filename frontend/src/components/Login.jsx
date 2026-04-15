import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSuccess = async (response) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/oauth`, {
        token: response.credential,
      });

      if (res.data.success) {
        localStorage.setItem('user', JSON.stringify(res.data.data.user));
        localStorage.setItem('accessToken', res.data.data.accessToken);
        navigate('/success');
      }
    } catch (error) {
      console.error('Google Login Error:', error.response?.data?.message || error.message);
      alert('Login failed: ' + (error.response?.data?.message || error.message));
    }
  };

  const handleError = () => {
    console.error('Google Login Failed');
    alert('Google Login Failed');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: '20px' }}>
      <h1>SkillSwap Test Login</h1>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </div>
  );
};

export default Login;
