import React from 'react';
import Table from 'react-bootstrap/Table';

function BorrowedTable({ theads, trows }) {
    //theads = array of tableheads
    //trows = array of row objects
    return (
        <div>
            <Table striped bordered hover size="sm" responsive>
                <thead>
                    <tr>
                        {
                            theads.map((head, index) => {
                                return (
                                    <th key={index}> {head} </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        trows.map((row, index) => {
                            return (
                                <tr>
                                    {
                                        Object.keys(row).map((element, index) => {
                                            return (
                                                <td key={index}>
                                                    {row[element]}
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default BorrowedTable;

