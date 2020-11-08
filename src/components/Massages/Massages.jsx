import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Massages.module.css'


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

//////////////////////////////////////////////////////////////// MASSAGE
const Massage = (props) => {

    return (
        <div className={classes.massage}>
            {props.massage}
        </div>
    )
}


//////////////////////////////////////////////////////////////// MASSAGEsSs
const Massages = (props) => {

    let dialogMap = props.dialogeArr.map((i) => <Dialoge num={i.id} name={i.name} active={i.active} src={i.src} />)
    let massageMap = props.massageArr.map((i) => <Massage massage={i.massage} id={i.id} />)

    return (
        <div className={classes.massages__wrapper}>
            <div className={classes.dialogs}>
                <h3>Messenger</h3>

                {dialogMap}

            </div>


            <div className={classes.massages}>
                <div className={classes.person__massages}>
                    {massageMap}
                </div>
            </div>
        </div>
    )
}

export default Massages;