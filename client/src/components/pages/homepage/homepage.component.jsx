import React from "react";
import './homepage.styles.scss';
import Sidebar from '../../sidebar/sidebar.component';
import Dashboard from "../../dashboard/dashboard.component";
const Homepage = () => {
    return (
        <>
            <div className="container-homepage-wrap">
                <div className="container-homepage">
                    <div className='container-homepage-body'>
                        <Sidebar />
                        <Dashboard />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Homepage;