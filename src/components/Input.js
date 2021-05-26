import React, { Component } from 'react'

class Input extends Component {
    constructor(props){
        super(props)
        this.state = {


        }
    }

    


    render() {
        //console.log(this.props)
        return (
            <div>
                <input id={this.props.id} name={this.props.name} type="text" placeholder={this.props.placeholder} onChange= {this.props.handleChange}></input>
            </div>
        )
    }
}

export default Input
