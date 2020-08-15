import React, { useContext } from 'react';
import "./header.styles.scss";
import { Link } from 'react-router-dom';
import GenreDropdown from '../GenreDropdown/GenreDropdown';
import Button from '@material-ui/core/Button';
import SidebarToggle from '../SidebarToggle/SidebarToggle';
import logo from '../../assets/logo.svg';
import { UserContext } from '../provider/user.provider';
import { setLocalStorage } from '../../Utils/App.util';

function Header(props) {
    const { setCurrentUser } = useContext(UserContext);
    const signUserOut = () => {
        setLocalStorage(null);
        setCurrentUser({ type: 'LOG_OUT_USER' }); //Sets global user object as empty
    }
    return (
        <div className="header-wrap">
            <div className="logo-container option">
                <Link to="/">
                    <img src={logo} width="50px" height="50px" alt="logo" />
                </Link>
                <SidebarToggle />
            </div>
            <div className="options-container">
                <GenreDropdown />
                <Button variant="contained" onClick={() => signUserOut()}>Sign Out</Button>
            </div>
        </div >
    )
}
export default Header;
