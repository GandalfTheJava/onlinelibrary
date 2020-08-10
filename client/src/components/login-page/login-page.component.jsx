import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './login-page.styles.scss';
import { TextField, Button } from '@material-ui/core';
import { UserContext } from '../provider/user.provider';

function LoginPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setCurrentUser } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            email: "deleted@gmail.com",
            password: "passwords"
        }
        const response = await axios.post('https://localhost:5000/users/login', { email: user.email, password: user.password });
        console.log(response);
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
