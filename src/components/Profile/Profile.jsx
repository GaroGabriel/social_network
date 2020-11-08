import React from 'react';
import classes from './Profile.module.css';
import Person from './Person/Person';
import Wall from './Wall/Wall';

function Profile(props) {


    return (
        <div className={classes.profile__wrapper}>
            <Person />
            <Wall post={props.post} />
        </div>
    );
}

export default Profile;