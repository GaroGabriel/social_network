import React from 'react';
import classes from './Wall.module.css';
import Wall_input from './Wall_input/Wall_input';
import Wall_posts from './Wall_posts/Wall_posts';


function Wall() {
    return (
        <div className={classes.wall_input__wrapper}>
            <Wall_input />
            <Wall_posts />
        </div>
    );
}

export default Wall;