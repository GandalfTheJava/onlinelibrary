import React from 'react';
import './directory-item.styles.scss';

function DirectoryItem({ bookName, bookAuthor, bookImage }) {
    return (
        <div className="item-container">
            <img src={bookImage} width="160px" height="200px" style={{ backgroundColor: 'pink' }}></img>
            <div className="book-name">{bookName}</div>
            <div className="book-author">{bookAuthor}</div>
        </div>
    )
}

export default DirectoryItem;
