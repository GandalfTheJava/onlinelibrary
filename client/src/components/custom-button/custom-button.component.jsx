import React from 'react';
import './custom-button.styles.scss';

import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function CustomButton(props) {
    let { dropdown } = props;
    {
        if (dropdown) {
            return (
                <div>
                    {[DropdownButton].map((DropdownType, idx) => (
                        <>
                            <DropdownType
                                as={ButtonGroup}
                                key={idx}
                                id={`dropdown-button-drop-${idx}`}
                                size="sm"
                                variant="info"
                                title="Genre List"
                                onClick={props.handleClick}
                            >
                                <Dropdown.Item value="Action"><Link to='/genre/action'>Action</Link></Dropdown.Item>
                                <Dropdown.Item value="Novel"><Link to='/genre/novel'>Novel</Link></Dropdown.Item>
                                <Dropdown.Item value="Fantasy"><Link to='/genre/fantasy'>Fantasy</Link></Dropdown.Item>
                                <Dropdown.Item value="Non-fiction"><Link to='/genre/nonfiction'>Non-fiction</Link></Dropdown.Item>
                            </DropdownType>
                        </>
                    ))}
                </div>
            )
        } else {
            return (
                <button onClick={props.onClick}><Link to={`${props.to}`}>{props.children}</Link></button>
            )
        }
    }
}


export default CustomButton;
