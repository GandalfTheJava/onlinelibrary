import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './login-page.styles.scss';
import { TextField, Button } from '@material-ui/core';
import { UserContext } from '../provider/user.provider';
import { setLocalStorage, loginUser } from '../../App.util';

function LoginPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setCurrentUser } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const loginResponse = await loginUser(email, password);
            setCurrentUser({ type: 'LOG_IN_USER', token: loginResponse.data.token, payload: loginResponse.data.user });
            setLocalStorage(loginResponse.data.token);
            props.history.push('/');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='container-login-form'>
            <div className='other'>
                <form type='submit' onSubmit={handleSubmit} className='login-form'>
                    <div>
                        <h1>Huddle</h1>
                    </div>
                    <TextField
                        autoComplete="off"
                        label="Email"
                        name="email"
                        type='email'
                        helperText='We will never share your email with anyone.'
                        variant="outlined"
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                    />
                    <TextField
                        label="Password"
                        name="password"
                        type='password'
                        variant="outlined"
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                    />
                    <Button type='submit' variant="contained" color="primary">Log in</Button>
                </form>
                <small><Link to="/register">New User?</Link></small>
            </div>
        </div >
    )
}
export default LoginPage;
