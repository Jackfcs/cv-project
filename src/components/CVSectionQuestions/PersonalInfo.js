import React, { Component } from "react";
import Name from "./Name";
import Contact from "./Contact";

class PersonalInfo extends Component {
  constructor(props) {
    super();
  }
  render() {
      
    let pInfo
      if (this.props.questionState === 0) {
          pInfo = <div>
          <h3 className={this.props.className}>
            Enter your contact information
          </h3>
          <Name
            inputs={this.props.inputs}
            className={this.props.className}
            handleChange={(e) => this.props.handleChange(e, this)}
          />
          <Contact
            inputs={this.props.inputs}
            className={this.props.className}
            handleChange={(e) => this.props.handleChange(e, this)}
          />
        </div>
      }

        return (
            <div>
          {pInfo}
          </div>
        );
      
    
  }
}

export default PersonalInfo;
