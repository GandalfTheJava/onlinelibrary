import React from 'react';
import { Alert } from 'react-bootstrap';
function AlertDemo() {
    return (
        <div>
            <Alert variant="success">
                <Alert.Heading>Hey, Thank you for checking out my project.</Alert.Heading>
                <p>
                    Since this project is still in development, there may be slight issues/bugs which may affect performce,
                    and or the overall feel of the application.
                    
            </p>
                <hr />
                <p className="mb-0">
                    This version is deployed for beta testing and does not represent the final product.
        </p>
            </Alert>
        </div>
    )
}

export default AlertDemo;
