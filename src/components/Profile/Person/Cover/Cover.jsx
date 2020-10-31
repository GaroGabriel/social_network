import React from 'react';
import classes from './Cover.module.css';
import cover from './cover.jpg'


function Cover() {
    return (
        <div className={classes.cover__wrapper}>
            <img src={cover} alt="cover" />
        </div>
    );
}

export default Cover;