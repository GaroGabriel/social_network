import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Massages.module.css'
import Dialoge from './Dialoge/Dialoge'
import Massage from './Massage/Massage'

const newMassage = React.createRef()

const massageSend = () => {
    alert(newMassage.current.value)
}



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
                <hr />

                <div className={classes.input}>
                    <textarea ref={newMassage} placeholder='your massage here' cols="30" rows="10"></textarea>
                </div>

                <button onClick={massageSend}>Send</button>
            </div>

        </div>
    )
}

export default Massages;