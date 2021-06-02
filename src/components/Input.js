import React, { Component } from 'react'
import "../css/Input.css"

class Input extends Component {
    constructor(props){
        super(props)
        this.state = {


        }
    }

    


    render() {
        return (
            <div>
                
                <input style={this.props.style} className={this.props.className} id={this.props.id} name={this.props.name} type="text" placeholder={this.props.placeholder} onChange={this.props.handleChange}></input>
            </div>
        )
    }
}

export default Input
