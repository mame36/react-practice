import React, { Component } from 'react';
import ButtonComponent from './ButtonComponent.js';


class App extends Component {
  state = {
      temp : "",
      count : 0,
      flag : 0
    }
    setTemp = (temp) => {
        if(this.state.flag === 0) {
            this.setState({
                temp : this.state.temp + temp
                          })
        } else if (this.state.flag === 1 && temp.search(/[0-9]/g) !== 0) {
            this.setState({
                              flag : 0,
                              temp : this.state.temp + temp
                          })
        } else {
            this.setState({
                              temp : temp,
                              flag : 0,
                              count : 0
                          })
        }

    }


    setClean = () => {
        this.setState({
            temp : "",
            count : 0
        })
    }
    setCount = () => {

      try {
          this.setState({
              count : eval(this.state.temp),
              flag : 1
          })
      } catch (e) {
          alert("入力した正計算式は正しくありません。");
          this.setState({
              temp : 0,
              count : 0
          })
          return;
      }

  }
  render() {
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
            <td colSpan={4} style={temp_style}>{this.state.temp}</td>
          </tr>
          <tr>
            <td colSpan={4} style={count_style}>{this.state.count}</td>
          </tr>
          <tr>
              <td><ButtonComponent value={" ( "} setTemp={this.setTemp}/></td>
              <td><ButtonComponent value={" ) "} setTemp={this.setTemp}/></td>
              <td><ButtonComponent value={" % "} setTemp={this.setTemp}/></td>
              <td><button onClick={this.setClean}>CE</button></td>
          </tr>
          <tr>
              <td><ButtonComponent value={"7"} setTemp={this.setTemp}/></td>
              <td><ButtonComponent value={"8"} setTemp={this.setTemp}/></td>
              <td><ButtonComponent value={"9"} setTemp={this.setTemp}/></td>
              <td><ButtonComponent value={" / "} setTemp={this.setTemp}/></td>
          </tr>
          <tr>
              <td><ButtonComponent value={"4"} setTemp={this.setTemp}/></td>
              <td><ButtonComponent value={"5"} setTemp={this.setTemp}/></td>
              <td><ButtonComponent value={"6"} setTemp={this.setTemp}/></td>
              <td><ButtonComponent value={" * "} setTemp={this.setTemp}/></td>
          </tr>
          <tr>
              <td><ButtonComponent value={"1"} setTemp={this.setTemp}/></td>
              <td><ButtonComponent value={"2"} setTemp={this.setTemp}/></td>
              <td><ButtonComponent value={"3"} setTemp={this.setTemp}/></td>
              <td><ButtonComponent value={" - "} setTemp={this.setTemp}/></td>
          </tr>
          <tr>
              <td><ButtonComponent value={"0"} setTemp={this.setTemp}/></td>
              <td><ButtonComponent value={"."} setTemp={this.setTemp}/></td>
              <td><button onClick={this.setCount}>=</button></td>
              <td><ButtonComponent value={" + "} setTemp={this.setTemp}/></td>
          </tr>
        </table>
    )
  }
}


export default App;
