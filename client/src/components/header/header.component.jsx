import React, { useContext } from 'react';
import "./header.styles.scss";
import { Link } from 'react-router-dom';
import GenreDropdown from '../GenreDropdown/GenreDropdown';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import { UserContext } from '../provider/user.provider';
import { setLocalStorage } from '../../Utils/App.util';

function Header(props) {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    let { user } = currentUser; //Empty object indicates not signed in
    const signUserOut = () => {
        setLocalStorage(null);
        setCurrentUser({ type: 'LOG_OUT_USER' }); //Sets global user object as empty
    }
    let userExists = Object.entries(user).length === 0 && user !== null;
    return (
        <div className="header-wrap">
            <div className="logo-container option">
                <Link to="/">
                    <img src={logo} width="50px" height="50px" alt="logo" />
                </Link>
                {!userExists ? <p>Welcome, {user.displayName}</p> : null}
            </div>
            <div className="options-container">
                <GenreDropdown history={props.history} />
                {
                    userExists ?
                        <Button variant="contained"><Link to={`/login`}>Sign In</Link></Button>//If a user object is empty
                        :
                        <Button variant="contained" onClick={() => signUserOut()}>Sign Out</Button>
                }
            </div>
        </div >
    )
}
export default Header;
