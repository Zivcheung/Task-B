import React, { Component } from 'react';
import './App_reset.css';
import "./App_nav.css";
import Table from "./container/TableContainer/TableContainer";
import Dropdown from "./container/DropdownContainer/DropdownContainer"


class App extends Component {
  render() {
    return (

      <div>
        <h1 className="main-title">Task B</h1>
        <Table></Table>
        <span className="spacer" />
        <Dropdown></Dropdown>
      </div>

    );
  }
}

export default App;
