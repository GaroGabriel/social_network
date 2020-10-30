import React from 'react';
import classes from './Search.module.css';


function Search() {
    return (
        <header className={classes.searchBar__wrapper}>
            <input type="text" placeholder="search " />
        </header>
    );
}

export default Search;