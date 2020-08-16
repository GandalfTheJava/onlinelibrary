import React, { useContext } from 'react';
import { sidebarContext } from '../provider/sidebarToggle.provider';
import MenuIcon from '@material-ui/icons/Menu';
const SidebarToggle = () => {
    const { sideBar, toggleSidebar } = useContext(sidebarContext);
    return (
        <>
            {
                <MenuIcon color="primary"
                    onClick={() => toggleSidebar(!sideBar)}>
                </MenuIcon>
            }
        </>
    )
};

export default SidebarToggle;