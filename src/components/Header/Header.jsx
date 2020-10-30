import React from 'react';
import './Header.css';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';

function Header() {
    return (
        <header className='header__wrapper'>
            <div className='container'>
                <Logo />
                <SearchBar />
            </div>
        </header>
    );
}

export default Header;