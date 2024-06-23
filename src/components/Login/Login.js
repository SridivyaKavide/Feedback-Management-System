// src/components/Login/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import AuthService from '../Auth/AuthService';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await AuthService.login(username, password);
            localStorage.setItem('user', JSON.stringify(response.user));
            navigate('/');
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    const handleGoogleLogin = () => {
        // Add Google login logic here
        alert('Google login not implemented yet');
    };

    const handleFacebookLogin = () => {
        // Add Facebook login logic here
        alert('Facebook login not implemented yet');
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login-form">
                {error && <p className="error-message">{error}</p>}
                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div className="social-login">
                <button onClick={handleGoogleLogin} className="google-login">
                    <img src="/images/google-icon-512x512-tqc9el3r.png" alt="Google Icon" /> Login with Google
                </button>
                <button onClick={handleFacebookLogin} className="facebook-login">
                    <img src="/images/facebook-icon-512x512-seb542ju.png" alt="Facebook Icon" /> Login with Facebook
                </button>
            </div>
            <div className="signup-link">
                <p>New user? <Link to="/signup">Create New Account</Link></p>
            </div>
        </div>
    );
};

export default Login;
