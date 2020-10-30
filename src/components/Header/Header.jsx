import React from 'react';
import classes from './Header.module.css';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';

function Header() {
    return (
        <header className={classes.header__wrapper}>
            <div className='container'>
                <div className={classes.container}>
                    <Logo />
                    <SearchBar />
                </div>
            </div>
        </header>
    );
}

export default Header;