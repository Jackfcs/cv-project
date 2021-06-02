import React, { Component } from "react";

class WorkExperienceInstance extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    let result = this.props.whichView("workExperience");
    return (
      <div>
        {result.map((item) => {
          return (
            <div key={item.id}>
              <div>{item.startDate}</div>
              <div>{item.endDate}</div>
              <div>{item.employer}</div>
              <div>{item.jobTitle}</div>
              <ul>
                {item.points.map((point) => {
                  return <li key={point.id}>{point.point}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default WorkExperienceInstance;
