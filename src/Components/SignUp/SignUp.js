import React, { useState } from 'react';
import './SignUp.css';
import gLogo from '../../images/google-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [massage, setMassage] = useState('');
    const [createUserWithEmailAndPassword, user,
        loading,
        error,] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();


    const handelEmail = (event) => {
        setEmail(event.target.value);

    }

    const handelPassword = (event) => {
        setPassword(event.target.value);


    }


    const handelConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/')
    }
    if (error) {
        setMassage(error?.message);
    }


    const handelSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setMassage("Oop!! Don't match Password");
            return;
        }

        if (password.length < 6) {
            setMassage("Please Password Length at last 6");
            return;
        }

        createUserWithEmailAndPassword(email, password);


    }

    return (
        <div className='signUp'>
            <h2>Sign Up</h2>
            <p className='massage'>{massage}</p>

            <div className='main-field'>
                <form onSubmit={handelSubmit}>
                    <div className='main-input'>
                        <label htmlFor="emailForm">Email</label>
                        <input onBlur={handelEmail} type="email" placeholder='Your Email' />
                        <label htmlFor="passwordForm">Password</label>
                        <input onBlur={handelPassword} type="password" placeholder='Your Password' />
                        <label htmlFor="confirmForm">Confirm Password</label>
                        <input onBlur={handelConfirmPassword} type="password" placeholder='Your Confirm Password' />
                    </div>

                    <div className='submit'>
                        <input type="submit" value={loading ? 'Loading....' : 'Sign Up'} />
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