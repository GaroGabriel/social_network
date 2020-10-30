import React from 'react';
import classes from './Logo.module.css';
import logo from "./Logo_Gabrielyan.png"

function Logo() {
    return (
        <header className={classes.logo__wrapper}>
            <a href="#">
                <img src={logo} alt="logo" />
            </a>
        </header>
    );
}

export default Logo;