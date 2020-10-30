import React from 'react';
import ListItem from './ListItem/ListItem';
import './Navbar.css';
import menu from './menu.svg'

function Navbar() {
    return (


        <div className='navbar__wrapper'>
            {/* <div className='nav__button'>
                    <img src={menu} alt="" />
                </div> */}
            <ul>
                <ListItem name='Profile' />
                <ListItem name='Massages' />
                <ListItem name='News' />
                <ListItem name='Settings' />
                <ListItem name='FAQ' />
            </ul>
        </div>

    );
}

export default Navbar;