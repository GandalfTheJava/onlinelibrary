import React, { useState, useContext } from 'react';
import './register.styles.scss';
import { UserContext } from '../provider/user.provider';
import { TextField, Button } from '@material-ui/core';
import { Form, Col } from 'react-bootstrap';
import axios from 'axios';
function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [displayName, setDisplayName] = useState('');
    const { setCurrentUser } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newUser = { email, password, passwordCheck, displayName };
            await axios.post('http://localhost:5000/users/register', newUser);
            const loginResponse = await axios.post('http://localhost:5000/users/login', { email, password });
            setCurrentUser({ type: 'LOG_IN_USER', token: loginResponse.data.token, payload: loginResponse.data.user });
            console.log(loginResponse.data)
            localStorage.setItem("auth-token", loginResponse.data.token);
            props.history.push('/');
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='container-register-form'>
            <form onSubmit={handleSubmit}>
                <h1>Thank you for choosing Huddle!</h1>
                <div>
                    <Form>
                        <Form.Row>
                            <Col>
                                <TextField
                                    autoComplete="off"
                                    name="email"
                                    label="Email"
                                    type='email'
                                    variant='outlined'
                                    required
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <TextField
                                    autoComplete="off"
                                    label="Display Name"
                                    name="displayName"
                                    type='displayName'
                                    variant='outlined'
                                    value={displayName}
                                    onChange={e => setDisplayName(e.target.value)}
                                />
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <TextField
                                    autoComplete="off"
                                    name="checkPassword"
                                    label="Confirm Password"
                                    type='password'
                                    variant='outlined'
                                    required
                                    value={passwordCheck}
                                    onChange={e => setPasswordCheck(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <TextField
                                    autoComplete="off"
                                    name="password"
                                    label="Password"
                                    type='password'
                                    variant='outlined'
                                    required
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Col>
                        </Form.Row>
                    </Form>
                </div>
                <Button type='submit' variant="contained" color="primary">Submit</Button>
            </form>
        </div>
    )
}

export default Register;
