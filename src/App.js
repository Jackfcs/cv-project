import "./css/App.css";
import React, { Component } from "react";
import PersonalInfo from "./components/CVSectionQuestions/PersonalInfo";
import Header from "./components/Header";
import DisplayCV from "./components/DisplayCVSections/DisplayCV";
import Button from "./components/Button";
import Summary from "./components/Summary"

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputs: {
        firstName: "",
        lastName: "",
        profession: "",
        city: "",
        postCode: "",
        phone: "",
        email: "",
        summary: "",
        workExperience: [{jobTitle: "", 
                          employer: "",
                          startDate: "", 
                          endDate: "", 
                          points: [""]
                        }]
      },
      className: "",
      buttonText: "Submit",
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e, component) {
    const value = e.target.value;
    component.setState({
      inputs: {
        ...component.state.inputs,
        [e.target.name]: value,
      },
    });
    console.log(value)
  }

  onSubmit() {
    if (this.state.className === "") {
      this.setState({
        className: "hide",
        buttonText: "Edit",
      });
    } else {
      this.setState({
        className: "",
        buttonText: "Submit",
      });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="App">
          <div className="inputs-container">
            <PersonalInfo
              className={this.state.className}
              handleChange={(e) => this.handleChange(e, this)}
            />
            <Summary 
              handleChange={(e) => this.handleChange(e, this)}
            />
            <Button 
              text={this.state.buttonText}
              onSubmit={this.onSubmit} 
            />
          </div>
          <div className="cv-container">
            <DisplayCV inputs={this.state.inputs} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
