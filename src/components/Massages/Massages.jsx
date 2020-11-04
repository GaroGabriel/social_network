import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Massages.module.css'


//////////////////////////////////////////////////////////////// DIALOGE
const Dialoge = (props) => {

    const toLink = '/massages/' + props.num;

    return (
        <div className={classes.dialog}>
            <NavLink to={toLink} className={classes.dialog__person + ' ' + props.active}>
                {props.name}</NavLink>
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

    const dialogeArr = [
        { name: 'ArmanCHO', id: 1, active: classes.active },
        { name: 'Հայկուհի', id: 2, active: '' },
        { name: 'Ինչ-որ հավայի Group', id: 3, active: '' },
        { name: '2Pac', id: 4, active: '' },
        { name: 'ԱԱԾ', id: 5, active: '' }
    ]
    const massageArr = [
        { id: 1, massage: 'first massage' },
        { id: 2, massage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam numquam distinctio asperiores  porro harum facere aliquid veritatis, repellendus fugiat voluptatum dolor ut illo cum cupiditate est. Voluptatibus, corrupti placeat.' },

        { id: 3, massage: 'ոռաթիո դելենիթ ծոնսթիթուամ մեա թե, մեա եու ուլլամծոռպեռ սուսծիպիանթուռ. նո դեսեռունթ վուլպութաթե վոլուպթաթում եում. եամ եխ ասսում թիմեամ աեթեռնո, իուս եթ նեմոռե բլանդիթ պռոբաթուս. սոլում նուլլամ իմպեռդիեթ վիմ եի, եռաթ ծոպիոսաե պոնդեռում վիմ եի, ալիի սապիենթեմ քուո ին.' },
    ]

    let dialogMap = dialogeArr.map((i) => <Dialoge num={i.id} name={i.name} active={i.active} />)
    let massageMap = massageArr.map((i) => <Massage massage={i.massage} id={i.id} />)

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