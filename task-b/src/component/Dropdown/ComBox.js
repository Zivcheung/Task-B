import React from 'react'; 
import './Dropdown.css'



// dropdown外层的输入框
const ComBox= (props)=>{
    return (
        <div className="com-box">
            {props.children}
        </div>
    );
}




export default ComBox;