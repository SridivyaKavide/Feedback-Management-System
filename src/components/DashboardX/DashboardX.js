// src/components/DashboardX/DashboardX.js
import React from 'react';
import './DashboardX.css'; // Import CSS for DashboardX styles

const DashboardX = () => {
    return (
        <div className="dashboard-container">
            <h2>Dashboard X</h2>
            <ul className="employee-list">
                <h4>Employee list</h4>
                <li className="employee-list-item">John Doe</li>
                <li className="employee-list-item">Jane Smith</li>
                {/* Add more employee list items as needed */}
            </ul>
            <div className="feedback-form">
                <h3>Send Feedback Request</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="feedbackParameters">Feedback Parameters</label>
                        <input type="text" id="feedbackParameters" name="feedbackParameters" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="feedbackDetails">Feedback Details</label>
                        <textarea id="feedbackDetails" name="feedbackDetails" rows="4"></textarea>
                    </div>
                    <button type="submit">Send Request</button>
                </form>
            </div>
        </div>
    );
};

export default DashboardX;
