import React from 'react';
import { withRouter } from 'react-router-dom';

import './homepage.styles.scss';
import Sidebar from '../../sidebar/sidebar.component';
import Dashboard from "../../dashboard/dashboard.component";
import Header from '../../header/header.component';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs.component';
import TableContents from '../../tableofcontents/tableofcontents.component';
import PageNotFound from '../../pages/not-found-page/not-found-page';
import History from '../../history/history.component';

const Homepage = (props) => {
    const { match, history, location: { pathname } } = props;
    let pathNames = pathname.split('/').filter(x => x);
    let choice = pathNames[pathNames.length - 1];
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
                            choice === 'homepage' ?
                                <Dashboard /> :
                                choice === 'directory' ?
                                    <TableContents /> :
                                    choice === 'history' ?
                                        <History /> :
                                        <PageNotFound />
                        }
                    </div>
                </div>
            </div>
        </>
    )
};

export default withRouter(Homepage);
