import "./css/App.css";
import React, { Component } from "react";
import PersonalInfo from "./components/CVSectionQuestions/PersonalInfo";
import Header from "./components/Header";
import DisplayCV from "./components/DisplayCVSections/DisplayCV";
import Button from "./components/Button";
import Summary from "./components/Summary";
import uniqid from "uniqid";
import WorkExperienceSection from "./components/CVSectionQuestions/WorkExperienceSection";
import {format} from 'date-fns'
import EducationQuestions from "./components/CVSectionQuestions/EducationQuestions";
import SkillsQuestions from "./components/CVSectionQuestions/SkillsQuestions";

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
        education: [
          {
            id: uniqid(),
            qualification: "",
            grade: "",
            school: "",
            startDate: "",
            endDate: "",

          }
        ],
        skills: [""]
      },
      className: "",
      buttonText: "Submit",
      workExperienceCount: 0,
      pointsCount: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.captureWE = this.captureWE.bind(this);
    this.captureWEDate = this.captureWEDate.bind(this);
    this.captureTask = this.captureTask.bind(this);
    this.addPoint = this.addPoint.bind(this);
    this.deletePoint = this.deletePoint.bind(this);
    this.addWE = this.addWE.bind(this);
    this.deleteWE = this.deleteWE.bind(this);
    this.captureEduDate = this.captureEduDate.bind(this);
    this.captureEdu = this.captureEdu.bind(this);
    this.addEdu = this.addEdu.bind(this);
    this.captureSkill = this.captureSkill.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.deleteEdu = this.deleteEdu.bind(this);
  }

  deleteEdu(e){
    e.preventDefault()
    if(this.state.inputs.education.length === 1){
      return
    }
    let education = this.state.inputs.education;
    let newEdu = this.state.inputs.education
    newEdu.splice(-1, 1)
    education = newEdu
    this.setState({
      inputs: {
        ...this.state.inputs,
        education
      },
    })
  }

  deleteSkill(e) {
    e.preventDefault();
    if(this.state.inputs.skills.length === 1){
      return
    }
    let skills = this.state.inputs.skills;
    let newSkills = this.state.inputs.skills
    newSkills.splice(-1, 1)
    skills = newSkills
    this.setState({
      inputs: {
        ...this.state.inputs,
        skills,
      },
    })

  }

  addSkill(e){
    e.preventDefault();
    let newSkill = '';
    let joined = this.state.inputs.skills.concat(newSkill);
    let skills = this.state.inputs.skills
    skills = joined;
    this.setState({
      inputs: {
        ...this.state.inputs,
        skills
      }
    })
  }

  captureSkill(e, index){
    e.preventDefault();
    let skills = [...this.state.inputs.skills];
    let clonedSkills = [...skills];
    clonedSkills[index] = e.target.value;
    skills = clonedSkills;

    this.setState({
      inputs: {
        ...this.state.inputs,
        skills
      },
      
    });
    console.log(skills)
  }

  addEdu(e){
    e.preventDefault();
    let newEdu =  {
        id: uniqid(),
        qualification: "",
        grade: "",
        school: "",
        startDate: "",
        endDate: "",

      }
    

    let joined = this.state.inputs.education.concat(newEdu);
    let education = this.state.education;
    education = joined;
    this.setState({
      inputs: {
        ...this.state.inputs,
        education,
      },
    })
    

  }

  captureEdu(e, index=0) {
    let education = [...this.state.inputs.education];
    let clonedEdu = { ...education[index] };
    clonedEdu[e.target.name] = e.target.value;
    education[index] = clonedEdu;

    this.setState({
      inputs: {
        ...this.state.inputs,
        education
      },
      
    });
    
  }

  captureEduDate(e, index){
    let education = [...this.state.inputs.education];
    let clonedEdu = { ...education[index] };
    clonedEdu[e.target.name] = format(new Date(e.target.value), 'MM/yyyy');
    education[index] = clonedEdu;

    this.setState({
      inputs: {
        ...this.state.inputs,
        education,
      },
    });
   // console.log(this.state);
  }

  deleteWE(e) {
    e.preventDefault()
    if(this.state.inputs.workExperiencelength === 1){
      return
    }
    let workExperience = this.state.inputs.workExperience;
    let newWE = this.state.inputs.workExperience
    newWE.splice(-1, 1)
    workExperience = newWE
    this.setState({
      inputs: {
        ...this.state.inputs,
        workExperience,
      },
    })
  }


  addWE(e){
    e.preventDefault();
    let newWE = {
      id: uniqid(),
      jobTitle: "",
      employer: "",
      startDate: "",
      endDate: "",
      points: [],
    }

    let joined = this.state.inputs.workExperience.concat(newWE);
    let workExperience = this.state.inputs.workExperience;
    workExperience = joined;
    this.setState({
      inputs: {
        ...this.state.inputs,
        workExperience,
      },
    })
    console.log(this.state.inputs.workExperience)

  }

  deletePoint(e, we){
    e.preventDefault();
    if(this.state.inputs.workExperience[we].points.length === 1){
      return
    }
    let workExperience = this.state.inputs.workExperience;
    let newPoints = this.state.inputs.workExperience[we].points
    newPoints.splice(-1, 1)
    workExperience[we].points = newPoints
    this.setState({
      inputs: {
        ...this.state.inputs,
        workExperience,
      },
    })
  }

  addPoint(e, index) {
    e.preventDefault();
    let newPoint = { id: uniqid(), point: "" };
    let joined = this.state.inputs.workExperience[index].points.concat(newPoint);
    let workExperience = this.state.inputs.workExperience;
    workExperience[index].points = joined;
    this.setState({
      inputs: {
        ...this.state.inputs,
        workExperience,
        
      },
    });
    console.log('work experience ', this.state.inputs.workExperience[index]);
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

  captureWE(e, index=0) {
    let workExperience = [...this.state.inputs.workExperience];
    let clonedWE = { ...workExperience[index] };
    clonedWE[e.target.name] = e.target.value;
    workExperience[index] = clonedWE;

    let workExperienceCount = index;

    this.setState({
      inputs: {
        ...this.state.inputs,
        workExperience,
      },
      workExperienceCount
    });
    
  }

  captureWEDate(e, index){
    let workExperience = [...this.state.inputs.workExperience];
    let clonedWE = { ...workExperience[index] };
    clonedWE[e.target.name] = format(new Date(e.target.value), 'MM/yyyy');
    workExperience[index] = clonedWE;

    this.setState({
      inputs: {
        ...this.state.inputs,
        workExperience,
      },
    });
   // console.log(this.state);
  }

  captureTask(e, index, we) {
    let workExperience = [...this.state.inputs.workExperience];
    let clonedWEInstance = { ...workExperience[we] };
    clonedWEInstance.points[index].point = e.target.value;
    workExperience[we].points = clonedWEInstance.points;
    this.setState({
      inputs: {
        ...this.state.inputs,
        workExperience,
      },
    });
    console.log('index ', index)
    console.log('we ', we)
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
              addPoint={(e, index) => this.addPoint(e, index)}
              deletePoint={(e, we) => this.deletePoint(e, we)}
              addWE={(e) => this.addWE(e)}
              deleteWE={(e) => this.deleteWE(e)}
              captureWE={(e, index, we) => this.captureWE(e, index, we)}
              captureWEDate={(e, index) => this.captureWEDate(e, index)}
              captureTask={(e, index, we) => this.captureTask(e, index, we)}  
              inputs={this.state.inputs}
              
            />
            
            <EducationQuestions
              captureEduDate={(e, index) => this.captureEduDate(e, index)} 
              inputs={this.state.inputs}
              captureEdu={(e, index) => this.captureEdu(e, index)}
              addEdu={(e) => this.addEdu(e)}
              deleteEdu={(e) => this.deleteEdu(e)}
            />
            <SkillsQuestions 
              skills={this.state.inputs.skills}
              captureSkill={(e, index) => this.captureSkill(e, index)}
              addSkill={(e) => this.addSkill(e)}
              deleteSkill={(e) => this.deleteSkill(e)}
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
