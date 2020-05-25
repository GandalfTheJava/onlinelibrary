import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './login-page.styles.scss';

import firebase from "../../assets/Firebase/firebase";
import "firebase/auth";

import { TextField, Button } from '@material-ui/core';
import { UserContext } from '../provider/user.provider';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { dispatch } = useContext(UserContext);

    const handleGoogleSignIn = () => {
        let user;
        let token;
        const auth = firebase.auth();
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        auth.signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            token = result.credential.accessToken;
            // The signed-in user info.
            user = result.user;
            //displayName == FIRST AND LAST NAME
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'LOG_IN_USER', user: { name: 'Mehmet', logged: true } });
    }
    return (
        <div className='container-form'>
            <form type='submit' onSubmit={handleSubmit}>
                <TextField
                    autoComplete="off"
                    label="Email"
                    name="email"
                    type='email'
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                />
                <TextField
                    label="Password"
                    name="password"
                    type='password'
                    onChange={event => setPassword(event.target.value)}
                    value={password}
                />
                <Button type='submit' variant="contained" color="primary">Submit</Button>
            </form>
            <small><Link to="/register">New User?</Link></small>

            <Button variant="contained" color="secondary" onClick={handleGoogleSignIn}>Sign in with Google</Button>
        </div >
    )
}
export default LoginPage;
