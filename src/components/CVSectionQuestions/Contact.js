import React, { Component } from 'react';
import Input from "../Input";

class Contact extends Component {
    constructor(props) {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Input
                    id="city" 
                    placeholder="City" 
                    name="city" 
                    handleChange={(e) => this.props.handleChange(e, this)}
                    value={this.props.inputs.city}
                />
                <Input  
                    id="postCode" 
                    placeholder="PostCode" 
                    name="postCode" 
                    handleChange={(e) => this.props.handleChange(e, this)}
                    value={this.props.inputs.postCode}/>
                <Input  
                    id="phone" 
                    placeholder="Phone Number" 
                    name="phone" 
                    handleChange={(e) => this.props.handleChange(e, this)}
                    value={this.props.inputs.phone}/>
                <Input 
                    id="email" 
                    placeholder="Email" 
                    name="email" 
                    handleChange={(e) => this.props.handleChange(e, this)}
                    value={this.props.inputs.email}
                />
                
            </div>
        )

    }
}

export default Contact