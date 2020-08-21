import React from 'react';
import './history.styles.scss';
import BorrowedTable from '../table/table';
function History() {
    let theads = ['#', 'ISBN', 'Name', 'Image', 'Author', 'Issued Date', 'Returned Date', 'Days Borrowed', 'Status'];
    let trows = [{
        number: 1,
        ISBN: '133123',
        Name: 'Some name',
        Image: 'Image link',
        Author: 'Author name',
        Issue: 'When was issued',
        Return: 'When due',
        Days: 'how long left',
        Status: 'whats going on'
    }]
    return (
        <div>
            <BorrowedTable theads={theads} trows={trows} />
        </div>
    )
}

export default History;
