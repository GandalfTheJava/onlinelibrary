import React from 'react';
import { withRouter } from 'react-router-dom';

import './homepage.styles.scss';
import Sidebar from '../../sidebar/sidebar.component';
import Dashboard from "../../dashboard/dashboard.component";
import Header from '../../header/header.component';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs.component';
import Directory from '../../directory/directory';
import TableContents from '../../tableofcontents/tableofcontens.component';
import PageNotFound from '../../pages/not-found-page/not-found-page';

const Homepage = (props) => {
    let dashboard = false;
    let directory = true;
    let history = true;
    console.log(props);
    return (
        <>
            <div className="container-homepage-wrap">
                <div className="container-homepage">
                    <div className='container-homepage-sidebar'>
                        <Sidebar />
                    </div>
                    <div className='container-homepage-body'>
                        <div className='container-homepage-header'>
                            <Header />
                        </div>
                        <div className='container-homepage-breadcrumbs'>
                            <Breadcrumbs />
                        </div>
                        {
                            dashboard ?
                                <Dashboard /> :
                                directory ?
                                    <TableContents /> :
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
