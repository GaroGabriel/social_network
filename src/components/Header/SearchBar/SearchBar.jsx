import React from 'react';
import Icons from './icons/Icons.jsx';
import Search from './Search/Search.jsx';
import './SearchBar.css';


function SearchBar() {
    return (
        <div className='searchBar__wrapper'>
            <Icons />
            <Search />
        </div>
    );
}

export default SearchBar;