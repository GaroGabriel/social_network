import React from 'react';
import ListItem from './ListItem/ListItem';
import classes from './Navbar.module.css';
import menu from './menu.svg'

function Navbar() {
    return (


        <div className={classes.navbar__wrapper}>
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