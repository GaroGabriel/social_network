import React from 'react';
import classes from './Profile.module.css';
import Person from './Person/Person';
import Wall from './Wall/Wall';

function Profile() {
    return (
        <div className={classes.profile__wrapper}>
            <Person />
            <Wall />
        </div>
    );
}

export default Profile;