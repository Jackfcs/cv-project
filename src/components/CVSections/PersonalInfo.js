import React, { Component } from 'react'
import Name from './Name'
import Contact from './Contact'

class PersonalInfo extends Component {
    constructor(props){
        super();
    }
    render() {
        return (
            
            <div>
                <Name 
                    className={this.props.className} 
                    handleChange={(e) => this.props.handleChange(e, this)}
                />
                <Contact 
                    className={this.props.className}
                    handleChange={(e) => this.props.handleChange(e, this)}
                />
            </div>
        )
    }
}


export default PersonalInfo