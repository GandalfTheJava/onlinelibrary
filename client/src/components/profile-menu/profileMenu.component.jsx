import React, { useContext } from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import { UserContext } from '../provider/user.provider';
import { setLocalStorage } from '../../Utils/App.util';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const ProfileMenu = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signUserOut = () => {
        setLocalStorage(null);
        setCurrentUser({ type: 'LOG_OUT_USER' }); //Sets global user object as empty
    }
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-menu">
                    {currentUser.user.displayName}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="/" onClick={() => signUserOut()}>
                        <ExitToAppIcon />
                        Sign Out
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div >
    )
}

export default ProfileMenu;
