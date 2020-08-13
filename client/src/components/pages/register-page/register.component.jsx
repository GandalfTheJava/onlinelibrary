import React, { useState, useContext } from 'react';
import './register.styles.scss';
import { UserContext } from '../../provider/user.provider';
import { TextField, Button } from '@material-ui/core';
import { registerUser } from './register.utils';

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
                                type='displayName'
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
                                required
                                fullWidth
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='register-input'>
                            <Button type='submit' className='submit-button' variant="contained" fullWidth={true} color="primary">Submit</Button>

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
            </div>

        </div>
    )
}

export default Register;
