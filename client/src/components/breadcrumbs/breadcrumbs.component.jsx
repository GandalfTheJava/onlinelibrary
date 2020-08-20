import React from 'react';
import { Breadcrumbs as MUIBreadcrumbs, Typography, Link } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
const Breadcrumbs = (props) => {
    const { history, location: { pathname } } = props;
    let pathNames = pathname.split("/").filter(x => x);

    const Capitilize = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
    return (
        <MUIBreadcrumbs aria-label="breadcrumb">
            <Link onClick={() => history.push("/")}>Home</Link>
            {
                pathNames.map((name, index) => {
                    const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathNames.length - 1;
                    return (
                        isLast ?
                            <Typography>{Capitilize(name)}</Typography>
                            :
                            <Link onClick={() => history.push(routeTo)}>
                                {Capitilize(name)}
                            </Link>
                    );
                })
            }
        </MUIBreadcrumbs>
    );
};

export default withRouter(Breadcrumbs);
