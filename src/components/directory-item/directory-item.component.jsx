import React from 'react';

function DirectoryItem({ bookName, bookAuthor, bookImage }) {
    return (
        <div className="item-container">
            <img src={bookImage} width="150px" height="150px" style={{ backgroundColor: 'pink' }}></img>
            <div className="book-name">{bookName}</div>
            <div className="book-author">{bookAuthor}</div>
        </div>
    )
}

export default DirectoryItem;
