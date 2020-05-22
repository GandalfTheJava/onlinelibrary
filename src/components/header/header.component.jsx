import React, { useState, createContext } from 'react';
import "../../Global.scss";
import "./header.styles.scss";
import { Link } from 'react-router-dom';
import GenreList from '../GenreList/GenreList';
import CustomButton from '../../components/custom-button/custom-button.component';
import logo from '../../assets/logo.svg';
import { CurrentUser } from '../provider/user.provider';

function Header({ value }) {
    const currentUser = createContext(CurrentUser);
    console.log(currentUser)
    return (

        <div className="header-wrap">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} width="50px" height="50px" alt="logo" />
                </Link>
            </div>
            <div className="options-container">
                <GenreList />
                <CustomButton to="login">Sign In</CustomButton>
            </div>
        </div >
    )
}
export default Header;
