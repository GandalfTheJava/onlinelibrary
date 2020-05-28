import React, { useState, useContext } from 'react';
import './register.styles.scss';
import { auth, createUserProfileDocument } from '../../assets/Firebase/firebase';
import { UserContext } from '../provider/user.provider';
import { TextField, Button } from '@material-ui/core';
import { Form, Col } from 'react-bootstrap';
function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { dispatch } = useContext(UserContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            let displayName = `${firstName} ${lastName}`
            createUserProfileDocument(user, { displayName });
            dispatch({ type: 'LOG_IN_USER', payload: user })
        } catch (error) {
            console.log(error);
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
                                    name="firstName"
                                    label="First Name"
                                    type='text'
                                    variant='outlined'
                                    required
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <TextField
                                    autoComplete="off"
                                    name="lastName"
                                    label="Last Name"
                                    type='text'
                                    variant='outlined'
                                    required
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                />
                            </Col>
                        </Form.Row>
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
                                    label="Password"
                                    name="password"
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
