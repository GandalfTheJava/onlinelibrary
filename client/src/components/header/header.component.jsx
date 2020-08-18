import React from 'react';
import "./header.styles.scss";
import AlertDemo from '../alert-demo/alert.component';
import SidebarToggle from '../SidebarToggle/SidebarToggle';
import ProfileMenu from '../profile-menu/profileMenu.component';
function Header() {
    return (
        <div className="header-wrap">

            <SidebarToggle />

            <AlertDemo />

            <div className="profile-menu-container">
                <ProfileMenu />
            </div>
        </div >
    )
}
export default Header;
