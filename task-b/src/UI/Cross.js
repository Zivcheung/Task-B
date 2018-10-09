import React from 'react'; 
import "./UI.css"




const Cross= (props)=>{
    return (
        <span className="cross" onClick={props.click} {...props.config}>
        </span>
    );
}




export default Cross;