import React, { useState, useContext } from 'react';
import './register.styles.scss';
import { UserContext } from '../../provider/user.provider';
import { TextField, Button } from '@material-ui/core';
import { registerUser } from './register.utils';
import { Link } from 'react-router-dom';
import AlertDemo from '../../../components/alert-demo/alert.component';
function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [displayName, setDisplayName] = useState('');
    const { setCurrentUser } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await registerUser(email, password, passwordCheck, displayName);
        setCurrentUser({ type: 'LOG_IN_USER', token: response.data.token, payload: response.data.user });
        props.history.push('/');
    }
    return (
        <div className='container-register'>
            <div className='container-register-wrap'>
                <div className='container-register-title'>
                    Register below
                </div>
                <div className='register-form'>
                    <form onSubmit={handleSubmit} className='register-form'>
                        <div className='register-input'>
                            <TextField
                                autoComplete="off"
                                name="email"
                                label="Email"
                                type='email'
                                color="secondary"
                                required
                                fullWidth
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='register-input'>
                            <TextField
                                autoComplete="off"
                                label="Display Name"
                                name="displayName"
                                color="secondary"
                                required
                                fullWidth
                                value={displayName}
                                onChange={e => setDisplayName(e.target.value)}
                            />
                        </div>
                        <div className='register-input'>
                            <TextField
                                autoComplete="off"
                                name="checkPassword"
                                label="Confirm Password"
                                type='password'
                                color="secondary"
                                required
                                fullWidth
                                value={passwordCheck}
                                onChange={e => setPasswordCheck(e.target.value)}
                            />
                        </div>
                        <div className='register-input'>
                            <TextField
                                autoComplete="off"
                                name="password"
                                label="Password"
                                type='password'
                                color="secondary"
                                required
                                fullWidth
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='register-input' style={{ textAlign: 'center' }}>
                            <Button
                                type='submit'
                                className='submit-button'
                                variant="contained"
                                fullWidth={true}
                                color="secondary"
                            >
                                Submit
                            </Button>
                            <Button href="/" color="primary">
                                I already have an account
                            </Button>
                        </div>
                    </form>
                    <div className='warning'>
                        <AlertDemo />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register;
