// src/components/DashboardX/FeedbackForm.js
import React, { useState } from 'react';

const FeedbackForm = ({ employees }) => {
    const [selectedEmployees, setSelectedEmployees] = useState([]);
    const [rating, setRating] = useState('');
    const [coding, setCoding] = useState('');
    const [codeReviews, setCodeReviews] = useState('');
    const [generalNotes, setGeneralNotes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const feedbackData = {
            employees: selectedEmployees,
            rating,
            coding,
            codeReviews,
            generalNotes
        };
        console.log('Mock feedback sent:', feedbackData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Request Feedback</h3>
            <div>
                <label>Employees</label>
                <select multiple onChange={(e) => setSelectedEmployees([...e.target.selectedOptions].map(option => option.value))}>
                    {employees.map(employee => (
                        <option key={employee.id} value={employee.id}>{employee.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Rating</label>
                <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
            </div>
            <div>
                <label>Coding</label>
                <input type="text" value={coding} onChange={(e) => setCoding(e.target.value)} />
            </div>
            <div>
                <label>Code Reviews</label>
                <input type="text" value={codeReviews} onChange={(e) => setCodeReviews(e.target.value)} />
            </div>
            <div>
                <label>General Notes</label>
                <textarea value={generalNotes} onChange={(e) => setGeneralNotes(e.target.value)}></textarea>
            </div>
            <button type="submit">Send Feedback Request</button>
        </form>
    );
};

export default FeedbackForm;
