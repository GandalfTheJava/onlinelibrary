import React, { useContext } from 'react';
import { sidebarContext } from '../provider/sidebarToggle.provider';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
const SidebarToggle = () => {
    const { sideBar, toggleSidebar } = useContext(sidebarContext);
    const shrink = sideBar.sideBar === true;
    return (
        <>
            {
                shrink ?
                    <Button onClick={() => toggleSidebar(!sideBar)}>
                        <KeyboardArrowLeftIcon color="secondary" fontSize='large' />
                        <KeyboardArrowLeftIcon color="secondary" fontSize='large' />
                        <KeyboardArrowLeftIcon color="secondary" fontSize='large' />
                    </Button>
                    :
                    <Button onClick={() => toggleSidebar(!sideBar)}>
                        <KeyboardArrowRightIcon color="secondary" fontSize='large' />
                        <KeyboardArrowRightIcon color="secondary" fontSize='large' />
                        <KeyboardArrowRightIcon color="secondary" fontSize='large' />
                    </Button>

            }
        </>
    )
};

export default SidebarToggle;