import React from 'react';
import { Link } from 'react-router-dom';
import gLogo from '../../images/google-logo.png';
import './LogIn.css';

const LogIn = () => {
    return (
        <div className='signUp sign-in'>
            <h2>Login</h2>

            <div className='main-field'>
                <form >
                    <div className='main-input'>
                        <label htmlFor="emailForm">Email</label>
                        <input type="email" placeholder='Your Email' />
                        <label htmlFor="passwordForm">Password</label>
                        <input type="password" placeholder='Your Password' />

                    </div>

                    <div className='submit'>
                        <input type="submit" value="Log In" />
                        <p>New to Ema-john? <Link to='/signUp'>Create New Account</Link></p>
                    </div>

                </form>
            </div>

            <div className='other-signUp'>
                <div className='separator'>
                    <div className='after'></div>
                    <p className='content'>Or</p>
                    <div className='after'></div>
                </div>

                <div>
                    <div className="googleSignIn">
                        <img src={gLogo} width='30px' height='30px' alt="" />
                        <p>Continue with Google</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;