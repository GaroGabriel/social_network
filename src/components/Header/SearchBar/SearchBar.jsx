import React from 'react';
import Icons from './icons/Icons.jsx';
import Search from './Search/Search.jsx';
import classes from './SearchBar.module.css';


function SearchBar() {
    return (
        <div className={classes.searchBar__wrapper}>
            <Icons />
            <Search />
        </div>
    );
}

export default SearchBar;