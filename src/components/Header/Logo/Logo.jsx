import React from 'react';
import './Logo.css';
import logo from "./Logo_Gabrielyan.png"

function Logo() {
    return (
        <header className='logo__wrapper'>
            <a href="#">
                <img src={logo} alt="logo" />
            </a>
        </header>
    );
}

export default Logo;