import React, { Component } from "react";
import Input from "../Input";
import Button from "../Button";
import "../../css/EducationQuestions.css";

class EducationQuestions extends Component {
  constructor(props) {
    super();
  }

  render() {
    let educationQuestions;
    if (this.props.questionState === 3) {
      educationQuestions = (
        <div>
          <h3>Enter your education</h3>
          <div className="education-container">
            {this.props.inputs.education.map((education, index) => {
              return (
                <div   className="education-instance" key={index}>
                  <label>
                    Start Date
                    <input
                      onChange={(e) => this.props.captureEduDate(e, index)}
                      type="month"
                      name="startDate"
                    ></input>
                  </label>
                  <br />
                  <label>
                    End Date
                    <input
                      onChange={(e) => this.props.captureEduDate(e, index)}
                      type="month"
                      name="endDate"
                    ></input>
                  </label>

                  <Input
                    handleChange={(e) => this.props.captureEdu(e, index)}
                    name="qualification"
                    placeholder="Qualification"
                  />
                  <Input
                    handleChange={(e) => this.props.captureEdu(e, index)}
                    name="grade"
                    placeholder="Grade"
                  />
                  <Input
                    handleChange={(e) => this.props.captureEdu(e, index)}
                    name="school"
                    placeholder="School"
                  />
                </div>
              );
            })}
          </div>
          <div className="buttons">
            <Button
            className="add-delete"
              onSubmit={(e) => this.props.addEdu(e)}
              text="Add Education"
            />
            <Button className="add-delete"
              onSubmit={(e) => this.props.deleteEdu(e)}
              text="Delete Education"
            />
          </div>
        </div>
      );
    }
    return <div>{educationQuestions}</div>;
  }
}

export default EducationQuestions;
