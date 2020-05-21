import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import { signInWithGoogle } from "../../assets/Firebase/firebase";
import { auth } from '../../assets/Firebase/firebase';


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
                <FormInput
                    id="email"
                    name="email"
                    type='email'
                    placeholder="Email address"
                    onChange={this.handleChange}
                    value={email}
                    className='container-email'
                />
                <FormInput
                    id="password"
                    name="password"
                    type='password'
                    placeholder="Password"
                    onChange={this.handleChange}
                    value={password}
                    className='container-password'
                />
                <small><a href="/register">New User?</a></small>
                <button type='submit' onClick={this.handleClick}>Submit</button>
                <button type='submit' onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
        )
    }
}

export default LoginPage;
