import React from 'react';
import './Wall.css';
import Wall_input from './Wall_input/Wall_input';
import Wall_posts from './Wall_posts/Wall_posts';


function Wall() {
    return (
        <div className='wall_input__wrapper'>
            <Wall_input />
            <Wall_posts />
        </div>
    );
}

export default Wall;