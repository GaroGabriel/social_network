import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Massages.module.css'


//////////////////////////////////////////////////////////////// DIALOGE
const Dialoge = (props) => {

    const toLink = '/massages/' + props.num;

    return (
        <div className={classes.dialog}>
            <NavLink to={toLink} className={classes.dialog__person + ' ' + props.active}>
                <img src={props.src} alt='Ava' />
                {props.name}
            </NavLink>
        </div>
    )
}


export default Dialoge;