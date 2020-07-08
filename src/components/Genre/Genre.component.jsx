import React, { useContext } from 'react';
import './genre.styles.scss';
import DirectoryItem from '../directory-item/directory-item.component';
import { directoryContext } from '../provider/directory.provider';
function Genre({ match }) {
    const { params: { genreid } } = match;
    const { directory } = useContext(directoryContext); //Get directory of item

    let { bookList } = directory[genreid]; //Get the bookList properties of the selected genre
    let list = bookList.map(item =>
        <div key={item.id}>
            <DirectoryItem
                bookName={item.bookName}
                bookImage={item.bookImage}
                bookAuthor={item.bookAuthor}
                bookDescription={item.bookDescription}
            />
        </div>
    );
    console.log(list);
    return (
        <div>
            {
                list != null ? list : null
            }
        </div>
    )
}

export default Genre;
