// src/components/Auth/AuthService.js
import axios from 'axios';

const AuthService = {
    login: (username, password) => {
        return axios.post('/api/login', { username, password })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            });
    },
    logout: () => {
        localStorage.removeItem('user');
    },
    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem('user'));
    }
};

export default AuthService; // Fix: Named export or export from a variable
