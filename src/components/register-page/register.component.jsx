import React, { useState } from 'react';
import { auth, createUserProfileDocument } from '../../assets/Firebase/firebase';
import { TextField, Button } from '@material-ui/core';

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        //     var errorMessage = error.message;
        // });
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            let displayName = `${firstName} ${lastName}`
            createUserProfileDocument(user, { displayName })

        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className='container-form'>
            <form onSubmit={handleSubmit}>
                <div className="container-first-last-name">
                    <TextField
                        autoComplete="off"
                        name="firstName"
                        label="First Name"
                        type='text'
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <TextField
                        autoComplete="off"
                        name="lastName"
                        label="Last Name"
                        type='text'
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>
                <TextField
                    autoComplete="off"
                    name="email"
                    label="Email"
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    autoComplete="off"
                    label="Password"
                    name="password"
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button type='submit' variant="contained" color="primary">Submit</Button>
            </form>
        </div>
    )
}

export default Register;
