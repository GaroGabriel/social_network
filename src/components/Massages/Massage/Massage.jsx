import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Massages.module.css'




const Massage = (props) => {

    return (
        <div className={classes.massage}>
            {props.massage}
        </div>
    )
}


export default Massage;