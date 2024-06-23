// src/components/FeedbackDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const feedbackDetailsData = {
    1: 'Detailed feedback for John Doe...',
    2: 'Detailed feedback for Jane Smith...',
    // Add more feedback details as needed
};

const FeedbackDetails = () => {
    const { id } = useParams();
    const feedbackDetail = feedbackDetailsData[id];

    return (
        <div>
            <h2>Feedback Details</h2>
            <p>{feedbackDetail}</p>
        </div>
    );
};

export default FeedbackDetails;
