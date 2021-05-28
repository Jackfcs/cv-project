import React, { Component } from 'react'

class Button extends Component {
    constructor(props){
        super()
    }


    render() {
        return (
            <div>
                <button onClick={this.props.onSubmit}>{this.props.text}</button>
            </div>
        )
    }
}

export default Button
