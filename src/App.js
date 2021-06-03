import "./css/App.css";
import React, { Component } from "react";
import PersonalInfo from "./components/CVSectionQuestions/PersonalInfo";
import Header from "./components/Header";
import DisplayCV from "./components/DisplayCVSections/DisplayCV";
import Button from "./components/Button";
import Summary from "./components/Summary";
import uniqid from "uniqid";
import WorkExperienceSection from "./components/CVSectionQuestions/WorkExperienceSection";

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
        workExperience: [
          {
            id: uniqid(),
            jobTitle: "",
            employer: "",
            startDate: "",
            endDate: "",
            points: [{ id: uniqid(), point: "" }],
          },
        ],
      },
      className: "",
      buttonText: "Submit",
      workExperienceCount: 0,
      pointsCount: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.captureWE = this.captureWE.bind(this);
    this.captureTask = this.captureTask.bind(this);
    this.addPoint = this.addPoint.bind(this);
    this.deletePoint = this.deletePoint.bind(this);
  }

  deletePoint(e){
    e.preventDefault();
    if(this.state.inputs.workExperience[0].points.length === 1){
      return
    }
    let workExperience = this.state.inputs.workExperience;
    let newPoints = this.state.inputs.workExperience[0].points
    newPoints.splice(-1, 1)
    workExperience[0].points = newPoints
    this.setState({
      inputs: {
        ...this.state.inputs,
        workExperience,
      },
    })
  }

  addPoint(e) {
    e.preventDefault();
    let newPoint = { id: uniqid(), point: "" };
    let joined = this.state.inputs.workExperience[0].points.concat(newPoint);
    let workExperience = this.state.inputs.workExperience;
    workExperience[0].points = joined;

    this.setState({
      inputs: {
        ...this.state.inputs,
        workExperience,
      },
    });
    console.log(this.state.inputs.workExperience[0].points);
  }

  handleChange(e, component) {
    const value = e.target.value;
    component.setState({
      inputs: {
        ...component.state.inputs,
        [e.target.name]: value,
      },
    });
  }

  captureWE(e) {
    let workExperience = [...this.state.inputs.workExperience];
    let clonedWE = { ...workExperience[this.state.workExperienceCount] };
    clonedWE[e.target.name] = e.target.value;
    workExperience[this.state.workExperienceCount] = clonedWE;

    this.setState({
      inputs: {
        ...this.state.inputs,
        workExperience,
      },
    });
    console.log(this.state);
    
  }

  captureTask(e, index) {
    let workExperience = [...this.state.inputs.workExperience];
    let clonedWEInstance = { ...workExperience[0] };
    clonedWEInstance.points[index].point = e.target.value;
    workExperience[0].points = clonedWEInstance.points;
    this.setState({
      inputs: {
        ...this.state.inputs,
        workExperience,
      },
    });
    console.log('out function', index)
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
      <div className="body">
        <Header />
        <div className="App">
          <div className="inputs-container">
            <PersonalInfo
              className={this.state.className}
              handleChange={(e) => this.handleChange(e, this)}
            />
            <Summary handleChange={(e) => this.handleChange(e, this)} />

            <WorkExperienceSection
              addPoint={(e) => this.addPoint(e)}
              deletePoint={(e) => this.deletePoint(e)}
              captureWE={(e) => this.captureWE(e)}
              captureTask={(e, index) => this.captureTask(e, index)}              
              points={this.state.inputs.workExperience[0].points}
            />
            <Button text={this.state.buttonText} onSubmit={this.onSubmit} />
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
