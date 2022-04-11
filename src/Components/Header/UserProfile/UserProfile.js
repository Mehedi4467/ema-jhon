import React from 'react';
import './UserProfile.css';
import userLogo from '../../../images/user-logo.png';

const UserProfile = () => {
    return (
        <div className='profile'>
            <img src={userLogo} alt="user profile img" />
        </div>
    );
};

export default UserProfile;