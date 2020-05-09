import React, { Component } from 'react'
import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
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
                        {[DropdownButton].map((DropdownType, idx) => (
                            <>
                                <DropdownType
                                    as={ButtonGroup}
                                    key={idx}
                                    id={`dropdown-button-drop-${idx}`}
                                    size="sm"
                                    variant="warning"
                                    title="Genre List"
                                >
                                    <Dropdown.Item value="Action" href="Action">Action</Dropdown.Item>
                                    <Dropdown.Item value="Novel" href="Novel">Novel</Dropdown.Item>
                                    <Dropdown.Item value="Fantasy" href="Fantasy">Fantasy</Dropdown.Item>
                                    <Dropdown.Item value="Non-fiction" href="Non-fiction">Non-fiction</Dropdown.Item>

                                </DropdownType>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default GenreList;
