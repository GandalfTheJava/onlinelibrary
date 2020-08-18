import React from "react";
import './homepage.styles.scss';
import Sidebar from '../../sidebar/sidebar.component';
import Dashboard from "../../dashboard/dashboard.component";

import Directory from '../../directory/directory';
import PageNotFound from '../../pages/not-found-page/not-found-page';
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



// {
//     dashboard ?
//         <Dashboard /> :
//         directory ?
//             <Directory /> :
//             history ?
//                 <Dashboard /> :
//                 <PageNotFound />
// }