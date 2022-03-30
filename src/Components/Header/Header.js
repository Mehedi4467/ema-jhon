import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="ema-jhone logo" />
            <div className='main-nav'>
                <Link to='/'>Home</Link>
                <Link to='/orders'>Order</Link>
                <Link to='/review'>Review</Link>
                <Link to='/about'>About</Link>
            </div>

        </nav>
    );
};

export default Header;