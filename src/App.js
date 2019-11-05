import React, { Component } from 'react';
import ButtonComponent from './ButtonComponent.js';
import TableComponent from "./TableComponent";


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
              temp : "",
              count : 0
          })
          return;
      }

  }
  render() {
    return (
        <TableComponent
            value={this.state.value}
            temp={this.state.temp}
            count={this.state.count}
            setTemp={this.setTemp}
            setClean={this.setClean}
            setCount={this.setCount}/>
    )
  }
}


export default App;
