import React from "react";

const Dashboard = () => {
    return (
        <div className="container-dashboard-wrap">
            Outside
            <div className="container-dashboard">
                Inside
                <div className="container-dashboard-title">
                    Loans
                </div>

                <div className='container-dashboard-search'>
                    Search for loaned books
                </div>

                <div className="container-dashboard-status">
                    <div className='container-dashboard-status-title'>
                        Titles
                    </div>
                    <div className='container-dashboard-status-results'>
                        Borrowed Stuff
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
