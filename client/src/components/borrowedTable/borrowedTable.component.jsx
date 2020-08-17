import React from 'react';
import Table from 'react-bootstrap/Table';

function BorrowedTable() {
    return (
        <div>
            <Table striped bordered hover size="sm" responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ISBN</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Author</th>
                        <th>Issue Date</th>
                        <th>Return Data</th>
                        <th>Days Remaining</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default BorrowedTable;

