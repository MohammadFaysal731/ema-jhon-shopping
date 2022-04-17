import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css';
import auth from '../../firebase.init';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    if (user) {
        navigate('/shop');
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two passwords did not match');
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer')
        }

        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div className="">
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>
                    Already Have an account? <Link className='form-link' to='/login'>Login</Link>
                </p>
                <div className="form-or-option">
                    <div className="left"></div>
                    or
                    <div className="right"></div>
                </div>
                <button className='continue-with-google'>
                    <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="" />Continue With Google
                </button>

            </div>
        </div>
    );
};

export default SignUp;