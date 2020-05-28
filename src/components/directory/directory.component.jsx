import React, { Component } from 'react';
import './directory.styles.scss';

import books from '../../assets/BooksDatabase/database';

import DirectoryItem from '../directory-item/directory-item.component';
import CustomButton from "../custom-button/custom-button.component";

class Directory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ListOfGenres: []
        }
    }
    componentDidMount() {
        this.setState({ ListOfGenres: books })
    }
    render() {
        let { ListOfGenres } = this.state;
        let list = ListOfGenres.map(genre =>
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
                    {/* <CustomButton href={`${genre.genreName}`}>View More</CustomButton> */}
                </div>
            </div>
        )
        return (
            <div>
                <div>{list}</div>
            </div>

        )
    }
}

export default Directory;
