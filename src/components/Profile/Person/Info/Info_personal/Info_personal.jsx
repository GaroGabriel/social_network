import React from 'react';
import classes from './Info_personal.module.css';
import Info_personal_item from './Info_personal_item/Info_personal_item';

const persInfo = [
    { key: 'Date of birth: ', value: "09.09.1888" },
    { key: 'E-mail: ', value: "somemail@gmail.com" },
    { key: 'Web: ', value: "www.something.am" },
    { key: 'Phone: ', value: "+(000) 000 00 00 00" }
]



const persInfoMap = persInfo.map((i) => <Info_personal_item keys={i.key} value={i.value} />)



function Info_personal() {
    return (
        <div className={classes.info_personal__wrapper}>
            {persInfoMap}
        </div>
    );
}

export default Info_personal;