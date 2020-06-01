import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './directory.styles.scss';
import { directoryContext } from '../provider/directory.provider';
import DirectoryItem from '../directory-item/directory-item.component';

function Directory() {
    let [ListOfGenres, setListOfGenres] = useState();
    const { directory } = useContext(directoryContext);

    useEffect(() => {
        setListOfGenres(directory);
    });
    let list;
    if (ListOfGenres != null) {
        list = Object.entries(ListOfGenres).map(genre =>
            <div className="genre-list-container" key={genre[0]}>
                <div className="genre-list-title">
                    <Link to={`/genre/${genre[1].title}`}>{genre[1].title}</Link>
                </div>
                <div className="genre-items">
                    {
                        genre[1].bookList.filter((items, idx) => idx < 10).map(item =>
                            (<div key={item.id}>
                                <DirectoryItem
                                    bookName={item.bookName}
                                    bookImage={item.bookImage}
                                    bookAuthor={item.bookAuthor}
                                    bookDescription={item.bookDescription}
                                />
                            </div>)
                        )
                    }
                </div>
            </div>
        )
    }
    return (
        <div>
            <div>{list != null ? list : null}</div>
        </div >

    )

}

export default Directory;
