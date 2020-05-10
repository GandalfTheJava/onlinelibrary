import React, { Component } from 'react';
import './directory.styles.scss';
import DirectoryItem from '../directory-item/directory-item.component';
class Directory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ListOfGenres: [
                {
                    genreName: 'Action',
                    bookList: [{
                        bookName: 'Book 1',
                        bookAuthor: 'Author1'
                    },
                    {
                        bookName: 'Book 2',
                        bookAuthor: 'Author2'
                    },
                    {
                        bookName: 'Book 3',
                        bookAuthor: 'Author3'
                    },
                    {
                        bookName: 'Book 4',
                        bookAuthor: 'Author4'
                    },
                    {
                        bookName: 'Book 5',
                        bookAuthor: 'Author5'
                    }]
                },
                {
                    genreName: 'Novel',
                    bookList: [{
                        bookName: 'Book 1',
                        bookAuthor: 'Author1'
                    },
                    {
                        bookName: 'Book 2',
                        bookAuthor: 'Author2'
                    },
                    {
                        bookName: 'Book 3',
                        bookAuthor: 'Author3'
                    },
                    {
                        bookName: 'Book 4',
                        bookAuthor: 'Author4'
                    },
                    {
                        bookName: 'Book 5',
                        bookAuthor: 'Author5'
                    }]
                },
                {
                    genreName: 'Fantasy',
                    bookList: [{
                        bookName: 'Book 1',
                        bookAuthor: 'Author1'
                    },
                    {
                        bookName: 'Book 2',
                        bookAuthor: 'Author2'
                    },
                    {
                        bookName: 'Book 3',
                        bookAuthor: 'Author3'
                    },
                    {
                        bookName: 'Book 4',
                        bookAuthor: 'Author4'
                    },
                    {
                        bookName: 'Book 5',
                        bookAuthor: 'Author5'
                    }]
                },
                {
                    genreName: 'Non-fiction',
                    bookList: [{
                        bookName: 'Book 1',
                        bookAuthor: 'Author1'
                    },
                    {
                        bookName: 'Book 2',
                        bookAuthor: 'Author2'
                    },
                    {
                        bookName: 'Book 3',
                        bookAuthor: 'Author3'
                    },
                    {
                        bookName: 'Book 4',
                        bookAuthor: 'Author4'
                    },
                    {
                        bookName: 'Book 5',
                        bookAuthor: 'Author5'
                    }]
                }
            ]
        }
    }
    render() {
        let { ListOfGenres } = this.state;
        let list = ListOfGenres.map(genre =>
            <div className="genre-list-container">
                <div className="genre-list-title">{genre.genreName}</div>
                <div className="genre-items">
                    {
                        genre.bookList.filter((items, idx) => idx < 2).map(item => (
                            <div>
                                <DirectoryItem bookName={item.bookName} bookAuthor={item.bookAuthor} />
                            </div>
                        )

                        )
                    }
                </div>
            </div>
        )
        return (
            list
        )
    }
}

export default Directory;
