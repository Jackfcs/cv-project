import React, { Component } from 'react'
import Input from "./Input";

class Summary extends Component {
    constructor(props){
        super()
    }

    render() {
        return (
            <div>
                <Input style={{height: "200px"}} handleChange={(e) => this.props.handleChange(e, this)}  className={this.props.className} name="summary" id="summary" placeholder="Summary"/>
            </div>
        )
    }
}

export default Summary
