import React from 'react';
// import ListItem from './ListItem/ListItem';
import classes from './Navbar.module.css';
import menu from './menu.svg'
import { NavLink } from 'react-router-dom';
import Friends from './friens/Friends';


function Navbar(props) {

    return (


        <div className={classes.navbar__wrapper}>
            <ul>
                <li>
                    <div className={classes.list__dot}></div>
                    <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
                </li>
                <li>
                    <div className={classes.list__dot}></div>
                    <NavLink to='/massages' activeClassName={classes.active}>Massages</NavLink>
                </li>
                <li>
                    <div className={classes.list__dot}></div>
                    <NavLink to='/news'>News</NavLink>
                </li>
                <li>
                    <div className={classes.list__dot}></div>
                    <NavLink to='/settings'>Settings</NavLink>
                </li>
                <li>
                    <div className={classes.list__dot}></div>
                    <NavLink to='/FAQ'>FAQ</NavLink>
                </li>
                {/* <ListItem name='Profile' na='/Profile' />
                <ListItem name='Massages' na='/Massages' />
                <ListItem name='News' />
                <ListItem name='Settings' />
                <ListItem name='FAQ' /> */}
            </ul>



            <Friends friensArr={props.friensArr} />

        </div>

    );
}

export default Navbar;