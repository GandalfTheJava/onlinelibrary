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
                                <Dropdown.Item value="Action" href="Action">Action</Dropdown.Item>
                                <Dropdown.Item value="Novel" href="Novel">Novel</Dropdown.Item>
                                <Dropdown.Item value="Fantasy" href="Fantasy">Fantasy</Dropdown.Item>
                                <Dropdown.Item value="Non-fiction" href="Non-fiction">Non-fiction</Dropdown.Item>

                            </DropdownType>
                        </>
                    ))}
                </div>
            )
        } else {
            return (
                <button><Link to={`/${props.children}/`}>{props.children}</Link></button>
            )
        }
    }

}


export default CustomButton;
