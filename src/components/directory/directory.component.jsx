import React, { useState, useEffect, useContext } from 'react';
import './directory.styles.scss';
import { directoryContext } from '../provider/directory.provider';
import DirectoryItem from '../directory-item/directory-item.component';

function Directory() {
    let [ListOfGenres, setListOfGenres] = useState();
    const { directory } = useContext(directoryContext);

    useEffect(() => {
        setListOfGenres(directory);
    });
    console.log(directory);
    let list;
    if (ListOfGenres != null) {
        list = ListOfGenres.map(genre =>
            <div className="genre-list-container">
                <div className="genre-list-title"> {genre.genreName} </div>
                <div className="genre-items">
                    {
                        genre.bookList.filter((items, idx) => idx < 3).map(item =>
                            (<div>
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
