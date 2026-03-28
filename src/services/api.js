// import axios from 'axios';

// // const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
// const API_URL = import.meta.env.VITE_API_URL;

// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   withCredentials: true,
// });

// // Projects API
// export const getProjects = async (params) => {
//   try {
//     const response = await api.get('/projects', { params });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching projects:', error);
//     throw error;
//   }
// };

// export const getProject = async (id) => {
//   try {
//     const response = await api.get(`/projects/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching project:', error);
//     throw error;
//   }
// };

// // Contact API
// export const submitContact = async (formData) => {
//   try {
//     const response = await api.post('/contact', formData);
//     return response.data;
//   } catch (error) {
//     console.error('Error submitting contact:', error);
//     throw error;
//   }
// };

// // Chat API
// export const sendChatMessage = async (message, sessionId = null) => {
//   try {
//     const response = await api.post('/chat/message', { message, sessionId });
//     return response.data;
//   } catch (error) {
//     console.error('Error sending chat message:', error);
//     throw error;
//   }
// };

// export const getConversation = async (sessionId) => {
//   try {
//     const response = await api.get(`/chat/conversation/${sessionId}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching conversation:', error);
//     throw error;
//   }
// };

// export default api;


// src/services/api.js
import axios from 'axios';

// Uncomment this line and use it properly
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

console.log('🔧 API Service initialized with URL:', API_URL);

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Add request interceptor for debugging
api.interceptors.request.use(
  (config) => {
    console.log(`📤 ${config.method.toUpperCase()} ${config.baseURL}${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
api.interceptors.response.use(
  (response) => {
    console.log(`📥 ${response.config.url} - Status: ${response.status}`);
    return response;
  },
  (error) => {
    console.error('Response error:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

// Projects API
export const getProjects = async (params) => {
  try {
    const response = await api.get('/projects', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const getProject = async (id) => {
  try {
    const response = await api.get(`/projects/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
};

// Contact API
export const submitContact = async (formData) => {
  try {
    const response = await api.post('/contact', formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact:', error);
    throw error;
  }
};

// Chat API
export const sendChatMessage = async (message, sessionId = null) => {
  try {
    const response = await api.post('/chat/message', { message, sessionId });
    return response.data;
  } catch (error) {
    console.error('Error sending chat message:', error);
    throw error;
  }
};

export const getConversation = async (sessionId) => {
  try {
    const response = await api.get(`/chat/conversation/${sessionId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching conversation:', error);
    throw error;
  }
};

// Resume API
export const getResumeInfo = async () => {
  try {
    const response = await api.get('/resume/info');
    return response.data;
  } catch (error) {
    console.error('Error fetching resume info:', error);
    throw error;
  }
};

export const downloadResume = async (source = 'navbar') => {
  try {
    const response = await api.get('/resume/download', {
      params: { source },
      responseType: 'blob',
      timeout: 30000,
    });
    return response.data;
  } catch (error) {
    console.error('Error downloading resume:', error);
    throw error;
  }
};

export default api;