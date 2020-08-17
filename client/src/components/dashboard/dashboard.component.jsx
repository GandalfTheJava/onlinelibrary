import React from "react";
import './dashboard.styles.scss';
import Breadcrumbs from '../breadcrumbs/breadcrumbs.component';
import BorrowedTable from '../borrowedTable/borrowedTable.component';
import Header from '../header/header.component';

const Dashboard = () => {
    return (
        <div className="container-dashboard-wrap">
            <div className='container-dashboard-header'>
                <Header />
            </div>
            <Breadcrumbs />
            <div className="container-dashboard">
                <div className="container-dashboard-title">
                    Loans
                </div>
                <div className='container-dashboard-search'>
                    §
                </div>
                <div className="container-dashboard-status">
                    <div className='container-dashboard-status-results'>
                        <BorrowedTable />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;
