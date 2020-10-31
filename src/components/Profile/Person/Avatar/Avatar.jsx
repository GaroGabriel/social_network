import React from 'react';
import classes from './Avatar.module.css';
import avatar from './avatar.jpg'
function Avatar() {
    return (
        <div className={classes.avatar__wrapper}>

            <img src={avatar} alt="avatar" />

        </div>
    );
}

export default Avatar;