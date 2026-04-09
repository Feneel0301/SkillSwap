import api from './axios';

/**
 * Update user profile details
 * @param {object} data - { name, bio, title, location, profileImage }
 */
export const updateProfile = async (data) => {
    const response = await api.put('/users/profile', data);
    return response.data;
};

/**
 * Update user skills
 * @param {object} data - { skillsTeach: [{name, level}], skillsLearn: [string] }
 */
export const updateSkills = async (data) => {
    const response = await api.post('/users/skills', data);
    return response.data;
};
