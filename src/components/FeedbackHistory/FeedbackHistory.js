// src/components/FeedbackHistory/FeedbackHistory.js
import React, { useState, useEffect } from 'react';
import './FeedbackHistory.css'; // Import CSS for FeedbackHistory styles

const feedbackHistoryData = [
    { id: 1, title: 'Feedback for John Doe', feedback: 'Good coding skills.' },
    { id: 2, title: 'Feedback for Jane Smith', feedback: 'Excellent in code reviews.' },
    // Add more feedback history data as needed
];

const FeedbackHistory = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        // Simulate fetching data
        setHistory(feedbackHistoryData);
    }, []);

    return (
        <div className="feedback-history-container">
            <h2 className="feedback-history-header">Feedback History</h2>
            <ul className="feedback-history-list">
                {history.map(entry => (
                    <li key={entry.id} className="feedback-history-item">
                        <h4>{entry.title}</h4>
                        <p>{entry.feedback}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeedbackHistory;
