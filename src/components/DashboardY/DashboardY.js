// src/components/DashboardY/DashboardY.js
import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardY.css'; // Import CSS for DashboardY styles

const feedbackData = [
    { id: 1, name: 'Feedback for John Doe ' },
    { id: 2, name: 'Feedback for Jane Smith' },
    // Add more feedback data as needed
];

const DashboardY = () => {
    return (
        <div className="dashboard-container">
            <h2>Dashboard Y</h2>
            <ul className="feedback-list">
                {feedbackData.map(feedback => (
                    <li key={feedback.id} className="feedback-list-item">
                        {feedback.name }  <Link to={`/feedback/${feedback.id}`}>View Feedback</Link>
                    </li>
                ))}
            </ul>
            <div className="feedback-form">
                <h3>Provide Feedback</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="rating">Rating</label>
                        <div className="star-rating">
                            <input type="radio" id="star1" name="rating" value="1" />
                            <label htmlFor="star1" title="1 star"> </label>
                            <input type="radio" id="star2" name="rating" value="2" />
                            <label htmlFor="star2" title="2 stars"> </label>
                            <input type="radio" id="star3" name="rating" value="3" />
                            <label htmlFor="star3" title="3 stars"> </label>
                            <input type="radio" id="star4" name="rating" value="4" />
                            <label htmlFor="star4" title="4 stars"></label>
                            <input type="radio" id="star5" name="rating" value="5" />
                            <label htmlFor="star5" title="5 stars"></label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="feedbackDetails">Feedback Details</label>
                        <textarea id="feedbackDetails" name="feedbackDetails" rows="9"></textarea>
                    </div>
                    <button type="submit">Submit Feedback</button>
                </form>
            </div>
        </div>
    );
};

export default DashboardY;
