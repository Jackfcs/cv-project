import React, { Component } from "react";
import Input from "../Input";

class Name extends Component {
  constructor(props){
    super()
}

  

  render() {
   
    return (
      <div>
        
        <Input className={this.props.className} value={this.props.inputs.firstName} id="fName" placeholder="First Name" name="firstName" handleChange={(e) => this.props.handleChange(e, this)}/>
        <Input className={this.props.className} value={this.props.inputs.lastName} id="lName" placeholder="Last Name" name="lastName" handleChange={(e) => this.props.handleChange(e, this)}/>
        <Input className={this.props.className} value={this.props.inputs.profession} id="profession" placeholder="Profession/Role" name="profession" handleChange={(e) => this.props.handleChange(e, this)}/>
                
      </div>
    );
  }
}

export default Name;
