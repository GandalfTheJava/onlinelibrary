import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import CustomButton from '../../components/custom-button/custom-button.component';

class GenreList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bookList: [],
            search: ''
        }
    }
    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({ bookList: json }))
    }
    render() {
        return (
            <div>
                <div>
                    <div>
                        <CustomButton dropdown={true} />
                    </div>
                </div>
            </div>
        )
    }
}

export default GenreList;
