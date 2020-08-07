import React, { useContext } from 'react';
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
    let { user } = currentUser; //Empty object indicates not signed in
    function signUserOut() {
        auth.signOut();
        setCurrentUser({ type: 'LOG_OUT_USER' }); //Sets global user object as empty
    }
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
                    Object.entries(user).length === 0 ? <CustomButton to='/login'>Sign In</CustomButton> //If a user object is not empty
                        :
                        <CustomButton to='/' onClick={() => signUserOut()}>Sign Out</CustomButton>
                }
            </div>
        </div >
    )
}
export default Header;
