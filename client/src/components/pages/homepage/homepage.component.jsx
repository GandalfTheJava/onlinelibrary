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
    let { match } = props;
    console.log(match);
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
                            match.path.slice(1) === 'homepage' ?
                                <Dashboard /> :
                                match.path.slice(1) === 'directory' ?
                                    <TableContents /> :
                                    match.path.slice(1) === 'history' ?
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
