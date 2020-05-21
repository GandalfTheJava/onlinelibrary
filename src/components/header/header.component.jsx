import React from 'react';
import "../../Global.scss";
import "./header.styles.scss";
import { connect } from 'react-redux';
import { setUser } from "../../redux/user/userActions";

import { Link } from 'react-router-dom';
import GenreList from '../GenreList/GenreList';
import CustomButton from '../../components/custom-button/custom-button.component';
import logo from '../../assets/logo.svg';

function Header(props) {
    console.log(props);
    return (

        <div className="header-wrap">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} width="50px" height="50px" alt="logo" />
                </Link>
            </div>
            <div className="options-container">
                <GenreList />
                <CustomButton to="login">Sign In</CustomButton>
            </div>
            <button onClick={() => setUser("this was fired from the app")}>Reducer?</button>
        </div >
    )
}
const mapStateToProps = ({ currentUser }) => {
    return { user: currentUser }
};
const mapDispatchToProps = () => {
    setUser: setUser();
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
