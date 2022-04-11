import React from 'react';
import './SignUp.css';
import gLogo from '../../images/google-logo.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='signUp'>
            <h2>Sign Up</h2>

            <div className='main-field'>
                <form >
                    <div className='main-input'>
                        <label htmlFor="emailForm">Email</label>
                        <input type="email" placeholder='Your Email' />
                        <label htmlFor="passwordForm">Password</label>
                        <input type="password" placeholder='Your Password' />
                        <label htmlFor="confirmForm">Confirm Password</label>
                        <input type="password" placeholder='Your Confirm Password' />
                    </div>

                    <div className='submit'>
                        <input type="submit" value="Sign Up" />
                        <p>Already have an account? <Link to='/login'>Log In</Link></p>
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

export default SignUp;