import React, { Component } from "react";
import Input from "../Input";

class Name extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.state = {
        
      inputs: {
        firstName: "",
        lastName: "",
      },
    };
  }

  handleChange(e) {
      const value = e.target.value
    this.setState({
        
        inputs: {
            ...this.state.inputs,
            [e.target.name]: value
        }
    });
    
  }

  render() {
    console.log('first: ', this.state.inputs.firstName)
    console.log('last: ', this.state.inputs.lastName)
    return (
      <div>
        <Input id="fName" placeholder="First Name" name="firstName" handleChange={this.handleChange}/>
        <Input id="lName" placeholder="Last Name" name="lastName" handleChange={this.handleChange}/>
        {/* <input id="fName" type="text" placeholder="First Name"></input>
                <input id="lName" type="text" placeholder="Last Name"></input>
                <input id="profession" type="text" placeholder="Profession/Role"></input> */}
      </div>
    );
  }
}

export default Name;
