import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile/UserProfile';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="ema-jhone logo" />
            <div className='main-nav'>
                <Link to='/'>Home</Link>
                <Link to='/orders'>Order</Link>
                <Link to='/review'>Review</Link>
                <Link to='/about'>About</Link>
                <Link to='/signUp'>Sign Up</Link>
                <div className='userProfile'>
                    <UserProfile></UserProfile>
                </div>
            </div>

        </nav>
    );
};

export default Header;