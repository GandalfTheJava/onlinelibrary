import React, { useState, useEffect } from 'react';
import './tableofcontents.styles.scss';

const TableContents = () => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        setCategories(['Action', 'Novel', 'Fantasy', 'Non-fiction']);
    }, []);
    return (
        <div className='container-contents-wrap'>
            <div className='container-contents'>
                <div className='container-contents-left'>

                    <div className='container-contents-left-content'>
                        <h1>Categories</h1>

                        <h6>Lorem Ipsum</h6>
                        <p> Books by genre. Genre refers to the content of the writing in the book.
                        </p>
                    </div>
                </div>
                <div className='container-contents-middle' />
                <div className='container-contents-right'>
                    <div className='container-contents-right-content'>
                        {
                            categories ? categories.map((category, index) => {
                                return (
                                    <div className='container-contents-right-content-item' key={index}>
                                        {category}
                                    </div>
                                )
                            })
                                : <h1>Loading..</h1>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableContents;
