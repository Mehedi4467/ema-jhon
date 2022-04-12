import React from 'react';
import './UserProfile.css';
import userLogo from '../../../images/user-logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const UserProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user?.photoURL);
    return (
        <div className='profile'>
            {user?.photoURL ? <img src={user?.photoURL} alt="user profile img" /> : <img src={userLogo} alt="user profile img" />}
        </div>
    );
};

export default UserProfile;