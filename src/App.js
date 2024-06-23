// src/App.js
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
import './App.css'; // Import CSS for layout


const App = () => {
    return (
        <Router>
            <div className="app-container">
                <MainHeader title="Feedback System" /> {/* Main header with dynamic title */}
                <Navbar /> {/* Secondary navigation */}
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard-x" element={<DashboardX />} />
                    <Route path="/dashboard-y" element={<DashboardY />} />
                    <Route path="/feedback-history" element={<FeedbackHistory />} />
                 
                    <Route path="/feedback/:id" element={<FeedbackDetails />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
