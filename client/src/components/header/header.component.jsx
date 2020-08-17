import React from 'react';
import "./header.styles.scss";
import { Link } from 'react-router-dom';
import SidebarToggle from '../SidebarToggle/SidebarToggle';
import ProfileMenu from '../profile-menu/profileMenu.component';
import logo from '../../assets/logo.svg';

function Header() {
    return (
        <div className="header-wrap">
            <div className="logo-container option">
                <Link to="/">
                    <img src={logo} width="50px" height="50px" alt="logo" />
                </Link>
                <SidebarToggle />
            </div>
            <p style={{ color: 'white', textAlign: 'center', marginTop: '5px' }}>
                THIS IS A DEMO APPLICATION. <br />
                PLEASE DO NOT USE SENSITIVE INFORMATION.</p>
            <div className="options-container">
                <ProfileMenu />
            </div>
        </div >
    )
}
export default Header;
