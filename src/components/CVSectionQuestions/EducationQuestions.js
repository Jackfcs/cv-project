import React, { Component } from "react";
import Input from "../Input";
import Button from "../Button";

class EducationQuestions extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div>Education</div>
        {this.props.inputs.education.map((education, index) => {
          return (
            <div key={index}>
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
                className={this.props.className}
                name="qualification"
                id="qualification"
                placeholder="Qualification"
              />
              <Input
                handleChange={(e) => this.props.captureEdu(e, index)}
                className={this.props.className}
                name="grade"
                id="grade"
                placeholder="Grade"
              />
              <Input
                handleChange={(e) => this.props.captureEdu(e, index)}
                className={this.props.className}
                name="school"
                id="school"
                placeholder="School"
              />
            </div>
          );
        })}
        <Button onSubmit={(e) => this.props.addEdu(e)} text="Add Education" />
        <Button
          onSubmit={(e) => this.props.deleteEdu(e)}
          text="Delete Education"
        />
      </div>
    );
  }
}

export default EducationQuestions;
