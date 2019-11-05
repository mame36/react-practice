import React, { Component } from 'react';

class ButtonComponent extends Component {
    setPropsTemp = () => {
        const { setTemp } = this.props;
        setTemp(this.props.value);
    }
    render() {
        return (
            <button onClick={this.setPropsTemp}>{this.props.value}</button>
        );
    }
};

export default ButtonComponent;