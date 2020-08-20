import React from "react";
import './dashboard.styles.scss';
import BorrowedTable from '../table/table';

const Dashboard = () => {
    let theads = ['#', 'ISBN', 'Name', 'Image', 'Author', 'Issue Date', 'Return Date', 'Days Left', 'Status'];
    let trows = [{
        number: 1,
        ISBN: '133123',
        Name: 'Some name',
        Image: 'Image link',
        Author: 'Author name',
        Issue: 'When was issued',
        Return: 'When due',
        Days: 'how long left',
        Status: 'whats going on'
    }]
    return (
        <div className="container-dashboard-wrap">
            <div className="container-dashboard">
                <div className="container-dashboard-title">
                    Loans
                </div>
                <div className='container-dashboard-search'>
                    §
                </div>
                <div className="container-dashboard-status">
                    <div className='container-dashboard-status-results'>
                        <BorrowedTable theads={theads} trows={trows} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;
