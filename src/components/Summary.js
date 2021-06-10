import React, { Component } from 'react'

class Summary extends Component {
    constructor(props){
        super()
    }

    render() {
        let summary
        if (this.props.questionState === 1) {
            summary = <div><h3>Enter your summary statement</h3>
            <textarea cols="36" rows="10" onChange={(e) => this.props.handleChange(e, this)} name="summary" id="summary" placeholder="Summary" value={this.props.summary}></textarea>
            
        </div>
        }
        
        return (
            
            <div>
                
                {summary}                
            </div>
        )
    }
}

export default Summary
