import React from 'react';
import './Person.css';
import Avatar from './Avatar/Avatar'
import Cover from './Cover/Cover'
import Info from './Info/Info'


function Person() {
    return (
        <div className='person__wrapper'>

            <Cover />
            <Avatar />
            <Info />
        </div>
    );
}

export default Person;