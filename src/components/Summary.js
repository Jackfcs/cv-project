import React, { Component } from 'react'

class Summary extends Component {
    constructor(props){
        super()
    }

    render() {

        
        return (
            <div>
                <textarea cols="36" rows="10" onChange={(e) => this.props.handleChange(e, this)}  className={this.props.className} name="summary" id="summary" placeholder="Summary"></textarea>
                
            </div>
        )
    }
}

export default Summary
