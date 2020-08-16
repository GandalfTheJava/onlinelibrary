import React, { useState, useContext } from 'react';
import './sidebar.styles.scss';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import HistoryIcon from '@material-ui/icons/History';
import { sidebarContext } from '../provider/sidebarToggle.provider';
import { Typography } from '@material-ui/core';

const Sidebar = () => {
    const { sideBar } = useContext(sidebarContext);
    let show = sideBar.sideBar;
    let menuTitles = [
        {
            title: 'Dashboard',
            icon: <DashboardIcon />,
            link: '/dashboard'
        },
        {
            title: 'Directory',
            icon: <LibraryBooksIcon />,
            link: '/directory'
        },
        {
            title: 'History',
            icon: <HistoryIcon />,
            link: '/history'
        }
    ];

    return (
        <div className="container-sidebar-wrap" style={{ display: show ? 'block' : 'none' }}>
            <div className='container-sidebar'>
                <div>
                    <div className='container-sidebar-title'>
                        <Typography variant='h6'>Welcome Message</Typography>
                    </div>
                    <Divider />
                    <div className='container-sidebar-navigation'>
                        <List>
                            {
                                menuTitles.map((nav, index) => (
                                    <ListItem key={index}>
                                        <ListItemIcon>{nav.icon}</ListItemIcon>
                                        <ListItemText primary={nav.title} />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Sidebar;
