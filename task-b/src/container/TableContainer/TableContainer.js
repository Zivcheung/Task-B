import React, { Component } from 'react';
import "./TableContainer.css"
import TableRow from "../../component/Table/TableRow";

class TableContainer extends Component {
    state = {
        tableData: [
            {
                date: (new Date()).toLocaleDateString(),
                name: "超人A",
                address: "上海市普陀区金沙江路 1518 弄",
                //没有放入id,将在render中生成
            },
            {
                date: (new Date()).toLocaleDateString(),
                name: "超人A",
                address: "上海市普陀区金沙江路 1518 弄"
            },
            {
                date: (new Date()).toLocaleDateString(),
                name: "超人A",
                address: "上海市普陀区金沙江路 1518 弄"
            },
            {
                date: (new Date()).toLocaleDateString(),
                name: "超人A",
                address: "上海市普陀区金沙江路 1518 弄"
            },{
                date: (new Date()).toLocaleDateString(),
                name: "超人A",
                address: "上海市普陀区金沙江路 1518 弄",
                //没有放入id,将在render中生成
            }
            
        ]
    }

    //generate an unique id for a list of component
    idGenerator(idx) {
        const date = new Date();
        return idx + date.getTime();
    }

    render() {
        return (
            <section className="table-wp">
                <table>
                    <thead>
                        <tr>
                            <th>日期</th>
                            <th>姓名</th>
                            <th>地址</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableData.map((val, idx) => {
                            const newKey = this.idGenerator(idx);
                            return <TableRow key={newKey} data={val} />;
                        })}
                    </tbody>
                </table>
                <br/>
                <p>表格长度上线450px，如果超出将出现scroll bar</p>
            </section>

        );
    }
}
export default TableContainer;