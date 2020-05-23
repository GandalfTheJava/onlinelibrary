import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './login-page.styles.scss';
import { signInWithGoogle } from "../../assets/Firebase/firebase";
import { auth } from '../../assets/Firebase/firebase';

import { TextField, Button } from '@material-ui/core';

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            currentUser: []

        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleClick = () => {
        auth.onAuthStateChanged()
    }
    render() {
        let { email, password } = this.state;
        return (
            <div className='container-form'>
                <TextField
                    autoComplete="off"
                    label="Email"
                    name="email"
                    type='email'
                    onChange={this.handleChange}
                    value={email}
                />
                <TextField
                    label="Password"
                    name="password"
                    type='password'
                    onChange={this.handleChange}
                    value={password}
                />
                <small><Link to="/register">New User?</Link></small>
                <Button type='submit' variant="contained" color="primary" onClick={this.handleClick}>Submit</Button>
                <Button type='submit' variant="contained" color="secondary" onClick={signInWithGoogle}>Sign in with Google</Button>
            </div>
        )
    }
}

export default LoginPage;
