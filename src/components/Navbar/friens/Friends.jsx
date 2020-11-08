import React from 'react';

import classes from './Friends.module.css';

import { NavLink } from 'react-router-dom';





function Friends(props) {


    let friendsM = props.friensArr.map((i) => <div className={classes.friend}>
        <img src={i.src} alt={i.name} />
        <NavLink to={i.id}>
            {i.name}</NavLink>
    </div>)
    return (
        <div>
            <h3>Friends</h3>
            < div className={classes.friends__wrapper} >


                {friendsM}
            </div >
        </div>


    );
}

export default Friends;