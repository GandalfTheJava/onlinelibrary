import React from "react";
import './dashboard.styles.scss';
import Breadcrumbs from '../breadcrumbs/breadcrumbs.component';
const Dashboard = () => {
    return (
        <div className="container-dashboard-wrap">
            <Breadcrumbs />
            <div className="container-dashboard">
                WRAP THIS WITH BORDER RADIUS
                <div className="container-dashboard-title">
                    Loans TITLE
                </div>

                <div className='container-dashboard-search'>
                    SOME WAY TO SEARCH FOR BOOKS HERE
                    AUTHOR
                    NAME
                    RELEASE DATE?
                </div>
                <div className="container-dashboard-status">
                    <div className='container-dashboard-status-title'>
                        TABLE OF TITLES
                    </div>
                    <div className='container-dashboard-status-results'>
                        CURRENT LOANED OUT BOOKS BY THIS USER
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
