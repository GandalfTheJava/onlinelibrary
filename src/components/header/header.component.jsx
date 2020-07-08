import React, { useContext, useEffect } from 'react';
import "./header.styles.scss";
import { Link } from 'react-router-dom';
import GenreList from '../GenreList/GenreList';
import CustomButton from '../../components/custom-button/custom-button.component';
import logo from '../../assets/logo.svg';
import { UserContext } from '../provider/user.provider';

import firebase from "../../assets/Firebase/firebase";
const auth = firebase.auth();

function Header() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    let { user } = currentUser;
    return (
        <div className="header-wrap">
            <div className="logo-container option">
                <Link to="/">
                    <img src={logo} width="50px" height="50px" alt="logo" />
                </Link>
            </div>
            <div className="options-container">
                <GenreList />
                {
                    Object.entries(user).length === 0 ? <CustomButton to='login'>Sign In</CustomButton> :
                        <CustomButton to='/' onClick={() => { auth.signOut(); setCurrentUser({ type: 'LOG_OUT_USER' }); }}>Sign Out</CustomButton>
                }
            </div>
        </div >
    )
}
export default Header;
