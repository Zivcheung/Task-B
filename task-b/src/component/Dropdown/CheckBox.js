import React from 'react';
import "./Dropdown.css"




const CheckBox = (props) => {
    return (
        <div className="input-wp">
            <input
                type="checkbox"
                name={props.name}
                value={props.value}
                id={props.id} 
                onChange={props.checkboxHandler}
                key_name={props.key_name}
                checked={props.checked}
                />
            <label htmlFor={props.id}>{props.value}</label>

        </div>
    );
}




export default CheckBox;