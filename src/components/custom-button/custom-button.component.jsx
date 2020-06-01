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
                                <Dropdown.Item value="Action"><Link to='genre/Action'>Action</Link></Dropdown.Item>
                                <Dropdown.Item value="Novel"><Link to='genre/Novel'>Novel</Link></Dropdown.Item>
                                <Dropdown.Item value="Fantasy"><Link to='genre/Fantasy'>Fantasy</Link></Dropdown.Item>
                                <Dropdown.Item value="Non-fiction"><Link to='genre/Non-fiction'>Non-fiction</Link></Dropdown.Item>
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
