import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gLogo from '../../images/google-logo.png';
import './LogIn.css';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user2, loading2] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handelEmailBlur = (event) => {
        setEmail(event.target.value);

    }
    const handelPasswordBlur = (event) => {
        setPassword(event.target.value);
    }

    const handelSubmitLogIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
        console.log(user)

    }


    if (user2) {
        navigate('/');
    }
    const signInGoogle = () => {
        signInWithGoogle();
        if (user) {
            console.log(user);
        }
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