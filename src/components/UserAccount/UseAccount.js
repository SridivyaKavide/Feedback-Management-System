// src/components/UserAccount/UserAccount.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './UserAccount.css';

const UserAccount = () => {
    return (
        <div className="user-account">
            <FontAwesomeIcon icon={faUser} size="2x" />
        </div>
    );
};

export default UserAccount;
