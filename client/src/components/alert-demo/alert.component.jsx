import React from 'react';
import { Alert } from 'react-bootstrap';
function AlertDemo() {
    return (
        <div>
            <Alert variant="info">
                <Alert.Heading>Hello, Thank you for checking out my project.</Alert.Heading>
                <p>
                    Since this project is still in development, there may be slight issues/bugs which may affect performance,
                    and or the overall feel of the application.
            </p>
                <hr />
                <p className="mb-0">
                    This version is deployed for beta testing purposes only and does not represent the final product.
        </p>
            </Alert>
        </div>
    )
}

export default AlertDemo;
