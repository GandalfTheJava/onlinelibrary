import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.styles.scss';
import { makeStyles } from '@material-ui/core/styles';
import GenreDropdown from '../GenreDropdown/GenreDropdown';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import HistoryIcon from '@material-ui/icons/History';
import Button from '@material-ui/core/Button';
import { sidebarContext } from '../provider/sidebarToggle.provider';
import { Typography } from '@material-ui/core';




const useStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: "#db5886"
        },
    },
});

const Sidebar = () => {
    const { sideBar } = useContext(sidebarContext);

    let showSidebar = sideBar.sideBar;
    const classes = useStyles();
    let menuTitles = [
        {
            title: 'Dashboard',
            icon: <DashboardIcon />,
            link: '/homepage'
        },
        {
            title: 'Directory',
            icon: <LibraryBooksIcon />,
            link: '/homepage/directory'
        },
        {
            title: 'History',
            icon: <HistoryIcon />,
            link: '/homepage/history'
        },
        {
            title: 'Account',
            icon: <PersonIcon />,
            link: '/homepage/profile'
        }
    ];
    return (
        <div className="container-sidebar-wrap" style={{ display: showSidebar ? 'block' : 'none' }}>
            <div className='container-sidebar'>
                <div className='container-sidebar-title'>
                    <Typography variant='h6'>Library</Typography>
                </div>
                <Divider />
                <div className='container-sidebar-navigation'>
                    {
                        menuTitles.map((nav, index) => (
                            <Link to={`${nav.link}`} style={{ textDecoration: 'none' }}>
                                <Button
                                    className={classes.root}
                                    key={index}
                                    size="large"
                                    startIcon={<ListItemIcon>{nav.icon}</ListItemIcon>}
                                >
                                    {nav.title}
                                </Button>
                            </Link>
                        ))
                    }
                    <GenreDropdown />
                </div>
            </div>
        </div >
    )
}

export default Sidebar;
