import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './login-page.styles.scss';

import { auth, createUserProfileDocument } from '../../assets/Firebase/firebase';
import { signInWithGoogle } from '../../assets/Firebase/firebase';
import { TextField, Button } from '@material-ui/core';
import { UserContext } from '../provider/user.provider';

function LoginPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setCurrentUser } = useContext(UserContext);
    useEffect(() => {
        let unSubscribeFromAuth = auth.onAuthStateChanged(async user => { //Equivalent to componentDidMount
            if (user) {
                const userRef = await createUserProfileDocument(user);
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({ type: 'LOG_IN_USER', payload: snapShot.data() });
                })
            }
        })
        // returned function will be called on component unmount 
        return () => {
            unSubscribeFromAuth(); //TODO: ADDRESS THIS ISSUE, does this log out users when login component demounts?
        }
    }, []);
    const handleGoogleSignIn = () => {
        signInWithGoogle().then(function (result) {
            // The signed-in user info.
            var user = result.user;
            setCurrentUser({ type: 'LOG_IN_USER', payload: user });
            props.history.push('/');
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            console.log(error);
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
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
                <Button variant="contained" color="secondary" onClick={handleGoogleSignIn}>Sign in with Google</Button>
                <small><Link to="/register">New User?</Link></small>
            </div>
        </div >
    )
}
export default LoginPage;
