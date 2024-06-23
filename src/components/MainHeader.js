// src/components/MainHeader.js
import React from 'react';

const MainHeader = ({ title }) => {
    return (
        <header className="main-header">
            <h1>{title}</h1>
        </header>
    );
};

export default MainHeader;
