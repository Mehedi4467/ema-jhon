import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile/UserProfile';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <nav className='header'>
            <img src={logo} alt="ema-jhone logo" />
            <div className='main-nav'>
                <Link to='/'>Home</Link>
                <Link to='/orders'>Order</Link>
                <Link to='/review'>Review</Link>
                <Link to='/about'>About</Link>
                {
                    user ? <button onClick={() => signOut(auth)}>Log Out</button> : <Link to='/signUp'>Sign Up</Link>
                }
                <div className='userProfile'>
                    <UserProfile></UserProfile>
                </div>
            </div>

        </nav>
    );
};

export default Header;