import React from 'react';
//import cssM from './'




const TableRow = (props) => {
    return (
        <tr>
            <td>{props.data.date+""}</td>
            <td>{props.data.name+""}</td>
            <td>{props.data.address+""}</td>
        </tr>
    );
}




export default TableRow;