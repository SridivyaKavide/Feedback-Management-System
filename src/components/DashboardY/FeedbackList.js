// src/components/DashboardY/FeedbackList.js
import React, { useState } from 'react';

const FeedbackList = ({ feedbackRequests }) => {
    const [feedback, setFeedback] = useState({
        rating: '',
        coding: '',
        codeReviews: '',
        generalNotes: ''
    });

    const handleSubmit = (e, requestId) => {
        e.preventDefault();
        console.log('Mock feedback submitted for request:', requestId, feedback);
    };

    return (
        <div>
            {feedbackRequests.map(request => (
                <form key={request.id} onSubmit={(e) => handleSubmit(e, request.id)}>
                    <h3>Feedback for {request.employeeName}</h3>
                    <div>
                        <label>Rating</label>
                        <input type="number" value={feedback.rating} onChange={(e) => setFeedback({ ...feedback, rating: e.target.value })} />
                    </div>
                    <div>
                        <label>Coding</label>
                        <input type="text" value={feedback.coding} onChange={(e) => setFeedback({ ...feedback, coding: e.target.value })} />
                    </div>
                    <div>
                        <label>Code Reviews</label>
                        <input type="text" value={feedback.codeReviews} onChange={(e) => setFeedback({ ...feedback, codeReviews: e.target.value })} />
                    </div>
                    <div>
                        <label>General Notes</label>
                        <textarea value={feedback.generalNotes} onChange={(e) => setFeedback({ ...feedback, generalNotes: e.target.value })}></textarea>
                    </div>
                    <button type="submit">Submit Feedback</button>
                </form>
            ))}
        </div>
    );
};

export default FeedbackList;
