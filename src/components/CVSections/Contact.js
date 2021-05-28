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
                    className={this.props.className} 
                    id="city" 
                    placeholder="City" 
                    name="city" 
                    handleChange={(e) => this.props.handleChange(e, this)}
                />
                <Input 
                    className={this.props.className} 
                    id="postCode" 
                    placeholder="PostCode" 
                    name="postCode" 
                    handleChange={(e) => this.props.handleChange(e, this)}/>
                <Input 
                    className={this.props.className} 
                    id="phone" 
                    placeholder="Phone Number" 
                    name="phone" 
                    handleChange={(e) => this.props.handleChange(e, this)}/>
                <Input 
                    className={this.props.className} 
                    id="email" 
                    placeholder="Email" 
                    name="email" 
                    handleChange={(e) => this.props.handleChange(e, this)}
                />
                
            </div>
        )

    }
}

export default Contact