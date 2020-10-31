import React from 'react';
import './Profile.css';
import Person from './Person/Person';
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