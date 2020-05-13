import React from 'react';
import './directory-item.styles.scss';
import { FaQuestionCircle } from 'react-icons/fa';

import BookModal from '../book-modal/book-modal.component';


function DirectoryItem({ bookName, bookAuthor, bookImage, bookDescription }) {
    let showModal = false;
    const triggerModal = () => (showModal = !showModal, console.log(showModal));
    return (
        <div className="item-container">
            <div className="question-icon" >
                <FaQuestionCircle onClick={triggerModal} />
            </div>
            <div>
                <img src={bookImage} width="160px" height="200px"></img>
                <div className="book-info">
                    <div className="book-name">{bookName}</div>
                    <BookModal showModal={showModal} bookTitle={bookName} bookDescription={bookDescription} />
                </div>
                <div className="book-author">{bookAuthor}</div>
            </div>
        </div>
    )
}
export default DirectoryItem;
