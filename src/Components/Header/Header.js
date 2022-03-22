import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="ema-jhone logo" />
            <div className='main-nav'>
                <a href="/Home">Home</a>
                <a href="/order">Order</a>
                <a href="/Review">Review</a>
                <a href="/About">About</a>
            </div>

        </nav>
    );
};

export default Header;