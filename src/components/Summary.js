import React, { Component } from 'react'

class Summary extends Component {
    constructor(props){
        super()
    }

    render() {
        let summary
        if (this.props.questionState === 2) {
            summary = <div>
            <textarea cols="36" rows="10" onChange={(e) => this.props.handleChange(e, this)}  className={this.props.className} name="summary" id="summary" placeholder="Summary"></textarea>
            
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
