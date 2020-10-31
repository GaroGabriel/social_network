import React from 'react';
import classes from './Person.module.css';
import Avatar from './Avatar/Avatar'
import Cover from './Cover/Cover'
import Info from './Info/Info'


function Person() {
    return (
        <div className={classes.person__wrapper}>

            <Cover />
            <Avatar />
            <Info />
        </div>
    );
}

export default Person;