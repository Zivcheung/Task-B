import React from 'react'; 


const addBtn= (props)=>{
    const _className = ["add-btn",props.className]
    return (
        <div className={_className.join(" ")} onClick={props.click}>
        
        </div>
    );
}




export default addBtn;