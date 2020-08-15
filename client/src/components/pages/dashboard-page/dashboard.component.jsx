import React from "react";
import Header from '../../header/header.component';
import Sidebar from '../../sidebar/sidebar.component';
import './dashboard.styles.scss';
const DashBoard = () => {
    return (
        <>
            <div className="container-dashboard-wrap">
                <div className="container-dashboard">
                    <div className="container-dashboard-header">
                        <Header />
                    </div>
                    <div className='container-dashboard-body'>
                        <div>
                            <Sidebar />
                        </div>
                        <div>
                            Main
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default DashBoard;