import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Massages.module.css'

function Massages(props) {
    return (
        <div className={classes.massages__wrapper}>
            <div className={classes.dialogs}>
                <h3>Messenger</h3>
                <div className={classes.dialog}>
                    <NavLink to='/massages/1' className={classes.dialog__person + ' ' + classes.active}>
                        ArmanCHO</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/massages/2' className={classes.dialog__person}>
                        Հայկուհի</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/massages/3' className={classes.dialog__person}>
                        Ինչ-որ հավայի Group</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/massages/4' className={classes.dialog__person}>
                        2Pac</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/massages/5' className={classes.dialog__person}>
                        ԱԱԾ</NavLink>
                </div>
            </div>


            <div className={classes.massages}>
                <div className={classes.person__massages}>
                    <div className={classes.massage}>
                        massages 1
                    </div>
                    <div className={classes.massage}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam numquam distinctio asperiores porro harum facere aliquid veritatis, repellendus fugiat voluptatum dolor ut illo cum cupiditate est. Voluptatibus, corrupti placeat.
                    </div>
                    <div className={classes.massage}>
                        ոռաթիո դելենիթ ծոնսթիթուամ մեա թե, մեա եու ուլլամծոռպեռ սուսծիպիանթուռ. նո դեսեռունթ վուլպութաթե վոլուպթաթում եում. եամ եխ ասսում թիմեամ աեթեռնո, իուս եթ նեմոռե բլանդիթ պռոբաթուս. սոլում նուլլամ իմպեռդիեթ վիմ եի, եռաթ ծոպիոսաե պոնդեռում վիմ եի, ալիի սապիենթեմ քուո ին.
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Massages;