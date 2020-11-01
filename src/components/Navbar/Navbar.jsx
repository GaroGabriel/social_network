import React from 'react';
import ListItem from './ListItem/ListItem';
import classes from './Navbar.module.css';
import menu from './menu.svg'

function Navbar() {
    return (


        <div className={classes.navbar__wrapper}>
            <ul>
                <ListItem name='Profile' hr='/Profile' />
                <ListItem name='Massages' hr='/Massages' />
                <ListItem name='News' />
                <ListItem name='Settings' />
                <ListItem name='FAQ' />
            </ul>
        </div>

    );
}

export default Navbar;