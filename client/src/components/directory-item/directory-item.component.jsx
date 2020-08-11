import React, { useState } from 'react';
import './directory-item.styles.scss';
import { FaQuestionCircle } from 'react-icons/fa';

import BookModal from '../book-modal/book-modal.component';


function DirectoryItem({ bookName, bookAuthor, bookImage, bookDescription }) {
    return (
        <div className="item-container">
            <div className="question-icon" >
                <BookModal bookName={bookName} bookAuthor={bookAuthor} bookImage={bookImage} bookDescription={bookDescription} />
            </div>
            <div>
                <img src={bookImage} width="160px" height="200px"></img>
                <div className="book-info">
                    <div className="book-name">{bookName}</div>
                </div>
                <div className="book-author">{bookAuthor}</div>
            </div>
        </div>
    )
}
export default DirectoryItem;
