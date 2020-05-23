import React, { Component } from 'react';
import firebase from 'firebase';
import { TextField, Button } from '@material-ui/core';
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
                <div className="container-first-last-name">
                    <TextField
                        autoComplete="off"
                        name="firstName"
                        label="First Name"
                        type='text'
                        onChange={this.handleChange}
                    />
                    <TextField
                        autoComplete="off"
                        name="secondName"
                        label="Second Name"
                        type='text'
                        onChange={this.handleChange}
                        value={email}
                    />
                </div>
                <TextField
                    autoComplete="off"
                    name="userName"
                    label="Username"
                    type='text'
                    onChange={this.handleChange}
                    value={email}
                />
                <TextField
                    autoComplete="off"
                    name="email"
                    label="Email"
                    type='email'
                    placeholder="Email address"
                    onChange={this.handleChange}
                    value={email}
                />
                <TextField
                    autoComplete="off"
                    label="Password"
                    name="password"
                    type='password'
                    placeholder="Password"
                    onChange={this.handleChange}
                    value={password}
                />
                <Button type='submit' variant="contained" color="primary" onClick={this.handleClick}>Submit</Button>
            </div>
        )
    }
}

export default Register;
