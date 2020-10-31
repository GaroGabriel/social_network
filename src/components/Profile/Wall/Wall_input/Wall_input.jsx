import React from 'react';
import classes from './Wall_input.module.css';

function Wall_input() {
    return (
        <div className={classes.wall_input__wrapper}>
            <hr />
            <textarea cols="num" rows="num" placeholder='Your News'></textarea>
            <button>Publish</button>
        </div>
    );
}

export default Wall_input;