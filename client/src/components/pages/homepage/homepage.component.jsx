import React from 'react';
import { withRouter } from 'react-router-dom';

import './homepage.styles.scss';
import Sidebar from '../../sidebar/sidebar.component';
import Dashboard from "../../dashboard/dashboard.component";

import Directory from '../../directory/directory';
import PageNotFound from '../../pages/not-found-page/not-found-page';
const Homepage = (props) => {
    let dashboard = true;
    let directory = true;
    let history = true;
    console.log(props);
    return (
        <>
            <div className="container-homepage-wrap">
                <div className="container-homepage">
                    <div className='container-homepage-body'>
                        <Sidebar />
                        {
                            dashboard ?
                                <Dashboard /> :
                                directory ?
                                    <Directory /> :
                                    history ?
                                        <Dashboard /> :
                                        <PageNotFound />
                        }
                    </div>
                </div>
            </div>
        </>
    )
};

export default withRouter(Homepage);
