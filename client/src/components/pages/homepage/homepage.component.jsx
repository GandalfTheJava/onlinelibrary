import React from "react";
import Header from '../../header/header.component';
import './homepage.styles.scss';

import GenreDropdown from '../../GenreDropdown/GenreDropdown';
import Sidebar from '../../sidebar/sidebar.component';
import Dashboard from "../../dashboard/dashboard.component";
const Homepage = () => {
    return (
        <>
            <div className="container-homepage-wrap">
                <div className="container-homepage">
                    <div className="container-homepage-header">
                        <Header />
                    </div>
                    <div className='container-homepage-body'>
                        <div>
                            <Sidebar />
                        </div>
                        <div>
                            <Dashboard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Homepage;