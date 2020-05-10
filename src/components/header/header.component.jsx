import React from 'react';
import "../../Global.scss";
import "./header.styles.scss";
import { Link, BrowserRouter as Router } from 'react-router-dom';
import GenreList from '../GenreList/GenreList';
import CustomButton from '../../components/custom-button/custom-button.component';
import logo from '../../assets/logo.svg';

function Header() {
    return (
        <div className="header-wrap">
            <Router>
                <div className="logo-container">
                    <Link to="/">
                        <img src={logo} width="50px" height="50px" alt="logo" />
                    </Link>
                </div>
                <div className="options-container">
                    <GenreList />
                    <Link to="/signIn">
                        <CustomButton >Sign In</CustomButton>
                    </Link>
                </div>
            </Router>
        </div>
    )
}

export default Header;
