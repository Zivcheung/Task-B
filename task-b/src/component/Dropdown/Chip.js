import React from 'react';
//import cssM from './'
import "./Dropdown.css"
import Cross from "../../UI/Cross"




const Chip = (props) => {
    return (
        <div className="chip">
            {props.children + ""}
            <div className="delete">
                <Cross className click={props.click} config={{key_name:props.key_name}}/>
            </div>

        </div>
    );
}




export default Chip;