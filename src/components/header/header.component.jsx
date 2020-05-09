import React from 'react';
import "../../Global.scss";
import "./header.styles.scss";
import { Link, BrowserRouter as Router } from 'react-router-dom';
import GenreList from "../GenreList/GenreList"
import logo from '../../assets/logo.svg';

function Header() {
    return (
        <div className="header-wrap">
            <Router>
                <div className="logo-container">
                    <Link to="/logo">
                        <img src={logo} width="50px" height="50px" alt="logo" />
                    </Link>
                </div>
                <div className="options-container">
                    <GenreList />
                    <div>Sign in</div>
                </div>
            </Router>
        </div>
    )
}

export default Header;
