import React from 'react';
import "./Dropdown.css"
import SearchBar from "./SearchBar"
import Checkbox from "./CheckBox"




const DropdownMenu = (props) => {
    const _className = ["dropdown-menu", props.className];
    const checkboxList = Object.keys(props.options);

    function idGenerator(idx) {
        const date = new Date();
        return idx + date.getTime();
    }

    return (
        <div className={_className.join(" ")} >
            <SearchBar searchHandler={props.searchHandler}></SearchBar>
            <div className="checkbox-list">
                {
                    checkboxList.map((key, idx) => {
                        const config = props.options[key];
                        const id = idGenerator(idx);
                        return <Checkbox
                            key={id}
                            name={config.name}
                            value={config.value}
                            key_name={key}
                            id={idGenerator(id)}
                            checkboxHandler={props.checkboxHandler}
                            checked={config.checked} />
                    })
                }
            </div>
        </div>
    );
}




export default DropdownMenu;