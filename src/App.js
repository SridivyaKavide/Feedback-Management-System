import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainHeader from './components/MainHeader';
import Homepage from './components/Homepage';
import DashboardX from './components/DashboardX/DashboardX';
import DashboardY from './components/DashboardY/DashboardY';
import FeedbackHistory from './components/FeedbackHistory/FeedbackHistory';
import FeedbackDetails from './components/FeedbackDetails';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div className="app-container">
                    <MainHeader title="Feedback System" />
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/dashboard-x" element={<ProtectedRoute element={DashboardX} />} />
                        <Route path="/dashboard-y" element={<ProtectedRoute element={DashboardY} />} />
                        <Route path="/feedback-history" element={<ProtectedRoute element={FeedbackHistory} />} />
                        <Route path="/feedback/:id" element={<ProtectedRoute element={FeedbackDetails} />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
