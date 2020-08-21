import React from 'react';
import './error-page.styles.scss';
import { withRouter } from 'react-router-dom';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Button from '@material-ui/core/Button';

const ErrorPage = (props) => {
    let { history } = props;
    return (
        <div className='container-error-wrap'>
            <div className='container-error-title'>
                <h2>4 <ErrorOutlineIcon color='secondary' fontSize='large' style={{ marginBottom: '3px' }} /> 4 </h2>
            </div>
            <div className='container-error-body'>
                <h1>Woops, looks like that page does not exist!</h1>
                <Button color='primary' onClick={() => history.push('/')}>Back to homepage?</Button>
            </div>

        </div>
    )
}

export default withRouter(ErrorPage); 
