import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001/api/v1',
    withCredentials: true,
});

// Response interceptor to handle token refresh
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If 401 and not already retried
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                // Try to refresh token
                await axios.post(
                    `${api.defaults.baseURL}/auth/refresh`, 
                    {}, 
                    { withCredentials: true }
                );
                
                // Retry the original request
                return api(originalRequest);
            } catch (refreshError) {
                // If refresh fails, clear storage and bubble up
                localStorage.removeItem('user');
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default api;
