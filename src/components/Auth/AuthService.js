const AuthService = {
    login: (username, password) => {
        if (username === 'John Doe' && password === 'john') {
            return Promise.resolve({ token: 'mock-token', user: { name: 'John Doe' } });
        } else {
            return Promise.reject(new Error('Invalid credentials'));
        }
    }
};

export default AuthService;
