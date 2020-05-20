import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""

        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
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
            </div>
        )
    }
}

export default Register;
