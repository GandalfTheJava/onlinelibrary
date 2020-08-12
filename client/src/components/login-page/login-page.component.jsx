import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './login-page.styles.scss';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
        <div className='container-login'>
            <div className='container-login-wrap'>
                <div className='container-login-title'>
                    <span>Log in</span>
                </div>
                <form type='submit' onSubmit={handleSubmit} className='login-form'>
                    <div className='input-container'>
                        <TextField
                            autoComplete="off"
                            label="Email"
                            name="email"
                            type="email"
                            onChange={event => setEmail(event.target.value)}
                            value={email}
                            fullWidth={true}
                        />
                    </div>
                    <div className='input-container'>
                        <TextField
                            label="Password"
                            name="password"
                            type='password'
                            onChange={event => setPassword(event.target.value)}
                            value={password}
                            fullWidth={true}
                        />
                    </div>
                    <div className='input-container'>
                        <Button className='submit-button' fullWidth={true} type='submit' variant="contained" color="primary">Submit</Button>
                    </div>
                    <div className='option-container'>
                        <FormControlLabel
                            control={<Checkbox name="checkedG" />}
                            label="Remember Me"
                        />
                        <small><Link to="/register">New User?</Link></small>
                    </div>
                </form>
                <div className='warning'>
                    <small>
                        THIS IS A <b> DEMO APPLICATION.</b>
                        <br />
                            PLEASE <b>DO NOT USE </b> SENSITIVE INFORMATION.
                        </small>
                </div>
            </div>
        </div >
    )
}
export default LoginPage;
