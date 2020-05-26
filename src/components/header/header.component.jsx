import React, { useContext, useState } from 'react';
import "./header.styles.scss";
import { Link } from 'react-router-dom';
import GenreList from '../GenreList/GenreList';
import CustomButton from '../../components/custom-button/custom-button.component';
import logo from '../../assets/logo.svg';
import { UserContext } from '../provider/user.provider';

import firebase from "../../assets/Firebase/firebase";
import "firebase/auth";
const auth = firebase.auth();

function Header() {
    const { currentUser, dispatch } = useContext(UserContext);
    let { user } = currentUser;
    console.log(user);
    return (
        <div className="header-wrap">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} width="50px" height="50px" alt="logo" />
                </Link>
            </div>
            <div className="options-container">
                {user.logged ? `Welcome ${user.name}` : 'Not Logged in'}
                <GenreList />
                {
                    Object.entries(user).length === 0 ? <CustomButton to='login'>Sign In</CustomButton> :
                        <CustomButton to='/' onClick={() => { auth.signOut(); dispatch({ type: 'LOG_OUT_USER' }); }}>Sign Out</CustomButton>
                }
            </div>
        </div >
    )
}
export default Header;
