import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gLogo from '../../images/google-logo.png';
import './LogIn.css';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user2, loading2, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();



    const from = location.state?.from?.pathname || '/';

    const handelEmailBlur = (event) => {
        setEmail(event.target.value);

    }
    const handelPasswordBlur = (event) => {
        setPassword(event.target.value);
    }

    const handelSubmitLogIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }


    if (user2 || user) {
        navigate(from, { replace: true });
    }
    if (error) {
        console.log(error.message);
    }
    const signInGoogle = () => {
        signInWithGoogle();
    }



    return (
        <div className='signUp sign-in'>
            <h2>Login</h2>

            <div className='main-field'>
                <form onSubmit={handelSubmitLogIn}>
                    <div className='main-input'>
                        <label htmlFor="emailForm">Email</label>
                        <input onBlur={handelEmailBlur} type="email" placeholder='Your Email' />
                        <label htmlFor="passwordForm">Password</label>
                        <input onBlur={handelPasswordBlur} type="password" placeholder='Your Password' />

                    </div>

                    <div className='submit'>
                        <input type="submit" value={loading2 ? 'Loading........' : 'Log In'} />
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
                    <div onClick={signInGoogle} className="googleSignIn">
                        <img src={gLogo} width='30px' height='30px' alt="" />
                        <p>{loading ? 'Loading........' : 'Continue with Google'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;