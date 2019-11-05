import React, { Component } from 'react';
import ButtonComponent from './ButtonComponent.js';

class TableComponent extends Component {

    render() {
        const { setTemp, setCount, setClean } = this.props;
        const temp_style = {
            height : "150px",
            width : "420px",
            verticalAlign: "top",
            wordBreak : "break-all"
        }
        const count_style = {
            height : "50px",
            width : "420px",
            verticalAlign: "bottom",
            wordBreak : "break-all",
            fontSize : "50px"
        }
        return (
            <table>
                <tr>
                    <td colSpan={4} style={temp_style}>{this.props.temp}</td>
                </tr>
                <tr>
                    <td colSpan={4} style={count_style}>{this.props.count}</td>
                </tr>
                <tr>
                    <td><ButtonComponent value={" ( "} setTemp={setTemp}/></td>
                    <td><ButtonComponent value={" ) "} setTemp={setTemp}/></td>
                    <td><ButtonComponent value={" % "} setTemp={setTemp}/></td>
                    <td><button onClick={setClean}>CE</button></td>
                </tr>
                <tr>
                    <td><ButtonComponent value={"7"} setTemp={setTemp}/></td>
                    <td><ButtonComponent value={"8"} setTemp={setTemp}/></td>
                    <td><ButtonComponent value={"9"} setTemp={setTemp}/></td>
                    <td><ButtonComponent value={" / "} setTemp={setTemp}/></td>
                </tr>
                <tr>
                    <td><ButtonComponent value={"4"} setTemp={setTemp}/></td>
                    <td><ButtonComponent value={"5"} setTemp={setTemp}/></td>
                    <td><ButtonComponent value={"6"} setTemp={setTemp}/></td>
                    <td><ButtonComponent value={" * "} setTemp={setTemp}/></td>
                </tr>
                <tr>
                    <td><ButtonComponent value={"1"} setTemp={setTemp}/></td>
                    <td><ButtonComponent value={"2"} setTemp={setTemp}/></td>
                    <td><ButtonComponent value={"3"} setTemp={setTemp}/></td>
                    <td><ButtonComponent value={" - "} setTemp={setTemp}/></td>
                </tr>
                <tr>
                    <td><ButtonComponent value={"0"} setTemp={setTemp}/></td>
                    <td><ButtonComponent value={"."} setTemp={setTemp}/></td>
                    <td><button onClick={setCount}>=</button></td>
                    <td><ButtonComponent value={" + "} setTemp={setTemp}/></td>
                </tr>
            </table>
        );
    }
};

export default TableComponent;