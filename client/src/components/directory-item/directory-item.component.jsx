import React, { useState } from 'react';
import './directory-item.styles.scss';
import { FaQuestionCircle } from 'react-icons/fa';

import BookModal from '../book-modal/book-modal.component';


function DirectoryItem({ bookName, bookAuthor, bookImage, bookDescription }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="item-container">
            <div className="question-icon" >
                <FaQuestionCircle onClick={handleShow} />
            </div>
            <div>
                <img src={bookImage} width="160px" height="200px"></img>
                <div className="book-info">
                    <div className="book-name">{bookName}</div>
                    <BookModal showModal={show} bookTitle={bookName} bookImage={bookImage} bookDescription={bookDescription} />
                </div>
                <div className="book-author">{bookAuthor}</div>
            </div>
        </div>
    )
}
export default DirectoryItem;
