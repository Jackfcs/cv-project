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
      buttonText: ["Personal Info", "Summary", "Work Experience", "Education", "Skills"],
      questionState: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.prevSection = this.prevSection.bind(this);
    this.nextSection = this.nextSection.bind(this);
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
    clonedEdu[e.target.name] = format(new Date(e.target.value), 'yyyy-MM');
    education[index] = clonedEdu;

    this.setState({
      inputs: {
        ...this.state.inputs,
        education,
      },
    });
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

  }

  deletePoint(e, we){
    e.preventDefault();
    if(this.state.inputs.workExperience[we].points.length === 0){
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
    clonedWE[e.target.name] = format(new Date(e.target.value), 'yyyy-MM');
    workExperience[index] = clonedWE;

    this.setState({
      inputs: {
        ...this.state.inputs,
        workExperience,
      },
    });
   
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
    }

  prevSection() {
    if (this.state.questionState > 0){
      this.setState({
        questionState: this.state.questionState - 1
      })
    }
  }

  nextSection() {
    if (this.state.questionState < 4){
      this.setState({
        questionState: this.state.questionState + 1
      })
    }
  }
  

  render() {
    let prevButton 
    let nextButton

    if (this.state.questionState >= 1 ) {
      prevButton = <Button className="nav" text={"Back to: " +this.state.buttonText[this.state.questionState -1]} onSubmit={this.prevSection} />
    } else {
      prevButton = ''
    }

    if (this.state.questionState <= 3) {
      nextButton = <Button className="nav" text={"Next: " + this.state.buttonText[this.state.questionState + 1]} onSubmit={this.nextSection} />
    } else {
      nextButton = ''
    }
    

    return (
      <div className="body">
        <Header />
        <div className="App">
          <div className="nav-and-inputs-container">
          <div className="navigation">
            <div className="prev-button">{prevButton}</div>
            <div className="next-button">{nextButton}</div>
          </div>

          <div className="inputs-container">
            <PersonalInfo
              inputs={this.state.inputs}
              handleChange={(e) => this.handleChange(e, this)}
              questionState={this.state.questionState}
            />
            <Summary
              summary={this.state.inputs.summary}
              handleChange={(e) => this.handleChange(e, this)}
              questionState={this.state.questionState}
            />

            <WorkExperienceSection
              addPoint={(e, index) => this.addPoint(e, index)}
              deletePoint={(e, we) => this.deletePoint(e, we)}
              addWE={(e) => this.addWE(e)}
              deleteWE={(e) => this.deleteWE(e)}
              captureWE={(e, index, we) => this.captureWE(e, index, we)}
              captureWEDate={(e, index) => this.captureWEDate(e, index)}
              captureTask={(e, index, we) => this.captureTask(e, index, we)}
              inputs={this.state.inputs}
              questionState={this.state.questionState}
            />

            <EducationQuestions
              captureEduDate={(e, index) => this.captureEduDate(e, index)}
              inputs={this.state.inputs}
              captureEdu={(e, index) => this.captureEdu(e, index)}
              addEdu={(e) => this.addEdu(e)}
              deleteEdu={(e) => this.deleteEdu(e)}
              questionState={this.state.questionState}
            />
            <SkillsQuestions
              skills={this.state.inputs.skills}
              captureSkill={(e, index) => this.captureSkill(e, index)}
              addSkill={(e) => this.addSkill(e)}
              deleteSkill={(e) => this.deleteSkill(e)}
              questionState={this.state.questionState}
            />
          </div>
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
