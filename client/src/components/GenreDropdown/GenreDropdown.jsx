import React from 'react';

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import {
    usePopupState,
    bindTrigger,
    bindMenu,
} from 'material-ui-popup-state/hooks'

const GenreDropdown = (props) => {
    const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' });
    const handleClick = (e) => {
        popupState.close();
        props.history.push(`/genre/${e.target.id}`);
    }
    return (
        <div>
            <Button variant="contained" {...bindTrigger(popupState)}> Genre List </Button>
            <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={handleClick} id='action'>Action</MenuItem>
                <MenuItem onClick={handleClick} id='novel'>Novel</MenuItem>
                <MenuItem onClick={handleClick} id='fantasy'>Fantasy</MenuItem>
                <MenuItem onClick={handleClick} id='nonfiction'>Non-Fiction</MenuItem>
            </Menu>
        </div>
    )
}

export default GenreDropdown;
