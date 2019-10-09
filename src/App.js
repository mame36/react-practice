import React, { Component } from 'react';


class App extends Component {
  state = {
      temp : "",
      count : 0,
      flag : 0
    }

  setTemp(value) {
    let splitTemp = this.state.temp.split(" ");

      if(value.search(/[\D]/) === 0) {
        if (splitTemp[splitTemp.length - 1].search(/[0-9]/g) === 0) {
            this.setState({
              flag : 0,
              temp : this.state.temp + value
            })
        } else {
            return;
        }
      } else if (this.state.flag === 0) {
          this.setState({
            temp : this.state.temp + value
          })
      } else {
          this.setState({
            temp : value,
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
    let splitTemp = this.state.temp.split(" ");
    let bracketCount1 = 0;
    let bracketCount2 = 0;

    if (this.state.temp.split(".") >= 2) {
        for (let i = 0 ; i < splitTemp.length ; i++) {
            if(splitTemp[i].split(".").length >= 3) {
                return;
            }
        }
    } else if (this.state.temp.split("(").length >= 2 || this.state.temp.split(")").length >= 2) {
        for (let i = 0 ; i < splitTemp.length ; i++) {
            if (splitTemp[i] === "(") {
              bracketCount1++;
            } else if(splitTemp[i] === ")") {
                bracketCount2++;
                if (bracketCount1 < bracketCount2) {
                    return;
                }
            }
            if (i === splitTemp.length - 1 && (bracketCount1 !== bracketCount2 || splitTemp[i-2].search(/[0-9]/g) !== 0 && splitTemp[i] === ")")) {
              return;
            }
        }
    }

    if (splitTemp[splitTemp.length-1].search(/[0-9]/g) === 0 || splitTemp[splitTemp.length-2] === ")") {
        this.setState({
          count : eval(this.state.temp),
          flag : 1
      })
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
            <td><button onClick={() => this.setTemp(" ( ")}>(</button></td>
            <td><button onClick={() => this.setTemp(" ) ")}>)</button></td>
            <td><button onClick={() => this.setTemp(" % ")}>%</button></td>
            <td><button onClick={this.setClean}>CE</button></td>
          </tr>
          <tr>
            <td><button onClick={() => this.setTemp("7")}>7</button></td>
            <td><button onClick={() => this.setTemp("8")}>8</button></td>
            <td><button onClick={() => this.setTemp("9")}>9</button></td>
            <td><button onClick={() => this.setTemp(" / ")}>÷</button></td>
          </tr>
          <tr>
            <td><button onClick={() => this.setTemp("4")}>4</button></td>
            <td><button onClick={() => this.setTemp("5")}>5</button></td>
            <td><button onClick={() => this.setTemp("6")}>6</button></td>
            <td><button onClick={() => this.setTemp(" * ")}>x</button></td>
          </tr>
          <tr>
            <td><button onClick={() => this.setTemp("1")}>1</button></td>
            <td><button onClick={() => this.setTemp("2")}>2</button></td>
            <td><button onClick={() => this.setTemp("3")}>3</button></td>
            <td><button onClick={() => this.setTemp(" - ")}>-</button></td>
          </tr>
          <tr>
            <td><button onClick={() => this.setTemp("0")}>0</button></td>
            <td><button onClick={() => this.setTemp(".")}>.</button></td>
            <td><button onClick={this.setCount}>=</button></td>
            <td><button onClick={() => this.setTemp(" + ")}>+</button></td>
          </tr>
        </table>
    )
  }
}


export default App;
