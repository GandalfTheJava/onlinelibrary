import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import firebase from 'firebase';

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            username: "",
            errorMessage: ""
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleClick = () => {
        let { email, password } = this.state;

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            var errorMessage = error.message;
        });
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
                />
                <FormInput
                    id="password"
                    name="password"
                    type='password'
                    placeholder="Password"
                    onChange={this.handleChange}
                    value={password}
                />
                <button type='submit' onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}

export default Register;
