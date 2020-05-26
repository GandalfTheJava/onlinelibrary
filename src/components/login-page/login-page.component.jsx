import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './login-page.styles.scss';

import firebase from "../../assets/Firebase/firebase";
import "firebase/auth";

import { TextField, Button } from '@material-ui/core';
import { UserContext } from '../provider/user.provider';

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { dispatch } = useContext(UserContext);

    useEffect(() => {
        let unSubscribeFromAuth = auth.onAuthStateChanged(user => { //Equivalent to componentDidMount
            //currentUser = user;
        })

        // returned function will be called on component unmount 
        return () => {
            unSubscribeFromAuth();
        }
    }, []);
    const handleGoogleSignIn = () => {
        provider.setCustomParameters({ prompt: 'select_account' });
        auth.signInWithPopup(provider).then(function (result) {

            dispatch({ type: 'LOG_IN_USER', payload: result.user });
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
        //dispatch({ type: 'LOG_IN_USER', user: { name: 'Name', logged: true } });
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
