// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="secondary-nav">
            <ul>
                <li><Link to="/">Home</Link></li> {/* Link to the homepage */}
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/dashboard-x">Dashboard X</Link></li>

                <li><Link to="/dashboard-y">Dashboard Y</Link></li>
                <li><Link to="/feedback-history">Feedback History</Link></li>
               
            </ul>
        </nav>
    );
};

export default Navbar;
