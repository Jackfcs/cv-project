import React, { Component } from 'react';
import "../css/Button.css";

class Button extends Component {
    constructor(props){
        super()
    }


    render() {
        return (
            <div>
                <button className={this.props.className} onClick={this.props.onSubmit}>{this.props.text}</button>
            </div>
        )
    }
}

export default Button
