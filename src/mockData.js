// src/mockData.js

export const employees = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
];

export const feedbackRequests = [
    { id: 1, employeeName: 'John Doe' },
    { id: 2, employeeName: 'Jane Smith' },
];

export const feedbackHistory = [
    { id: 1, feedback: 'Good coding skills.' },
    { id: 2, feedback: 'Excellent in code reviews.' },
];

export const login = (username, password) => {
    if (username === 'John Doe' && password === 'john') {
        return Promise.resolve({ token: 'mock-token', user: 'John Doe' });
    } else if (username === 'userY' && password === 'password') {
        return Promise.resolve({ token: 'mock-token', user: 'userY' });
    } else {
        return Promise.reject(new Error('Invalid credentials'));
    }
};
