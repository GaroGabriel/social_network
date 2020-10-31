import React from 'react';
import Person from './Person/Person';
import './Profile.css';
import Wall from './Wall/Wall';

function Profile() {
    return (
        <div className='profile__wrapper'>
            <Person />
            <Wall />
        </div>
    );
}

export default Profile;