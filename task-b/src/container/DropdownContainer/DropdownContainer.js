import React, { Component } from 'react';
import "./DropdownContainer.css"
import ComBox from "../../component/Dropdown/ComBox"
import Chip from "../../component/Dropdown/Chip"
import AddBtn from "../../component/Dropdown/AddBtn"
import DropdownMenu from "../../component/Dropdown/DropdownMenu"

class container extends Component {
    state = {
        options: {
            "changing": {
                name: "state",
                value: "变更中",
                checked: false,
            },
            "nonActive": {
                name: "state",
                value: "未生效",
                checked: false,
            },
            "aborted": {
                name: "state",
                value: "作废",
                checked: false,
            },
            "normal": {
                name: "state",
                value: "正常",
                checked: false,
            },
            "inProcess": {
                name: "state",
                value: "审核中",
                checked: false,
            }
        },
        showDropdown: false,
        searchResult: {

        },
        emptySearch: true

    }

    dropdownHandler = (e) => {
        e.stopPropagation();
        this.setState((tempState) => ({ showDropdown: !tempState.showDropdown }));
    }

    checkboxHandler = (e) => {
        let temState = { ...this.state.options };
        const which = e.target.getAttribute("key_name");
        temState[which].checked = e.target.checked;
        this.setState({
            options: temState
        });
    }
    deleteChipHandler = (e) => {
        let temState = { ...this.state.options };
        const which = e.target.getAttribute("key_name");
        temState[which].checked = !temState[which].checked;
        this.setState({
            options: temState
        });
    }

    searchHandler = (e) => {
        const tempState = { ...this.state.options };
        const searchResult = {};
        //为搜索准备
        const oriArr = Object.keys(tempState).map((val) => {
            return tempState[val].value;
        });
        const searchVal = e.target.value;
        function query(keyword, list) {
            let arr = [];
            for (let i = 0; i < list.length; i++) {
                if (list[i].split(keyword).length > 1) {
                    arr.push(i);
                }
            }
            return arr;
        }
        const isEmpty = searchVal.length === 0;
        Object.keys(tempState).forEach((key, idx) => {
            let resultArr = query(searchVal, oriArr);
            const keys = Object.keys(tempState);
            for (let i = 0; i < resultArr.length; i++) {
                let thisKey = keys[resultArr[i]]
                searchResult[thisKey] = tempState[thisKey]
            }
        })

        this.setState({
            searchResult: searchResult,
            emptySearch: isEmpty,
        });
    }

    idGenerator(idx) {
        const date = new Date();
        return idx + date.getTime();
    }

    render() {
        return (
            <div className="dropdown-wp">
                <ComBox>
                    {Object.keys(this.state.options).map((key) => {
                        const item = this.state.options[key];
                        const keyVal = this.idGenerator(key);
                        if (item.checked) {
                            return <Chip key={keyVal} click={this.deleteChipHandler} key_name={key}>{item.value}</Chip>
                        }
                        return null;
                    })}
                    <AddBtn className={this.state.showDropdown ? "open" : ""} click={this.dropdownHandler} />
                </ComBox>
                {
                    this.state.showDropdown ? <DropdownMenu
                        options={!this.state.emptySearch ? this.state.searchResult : this.state.options}
                        checkboxHandler={this.checkboxHandler}
                        searchHandler={this.searchHandler}
                        dropdownHandler={this.dropdownHandler}
                    /> : null
                }

            </div>

        );
    }
}
export default container;