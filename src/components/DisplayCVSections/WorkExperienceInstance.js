import React, { Component } from "react";
import "../../css/WorkExperienceInstance.css"

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
            <div className="WE" key={item.id}>
              <div className="dates">
                <div className="start">{item.startDate} -</div>
                <div className="end">{item.endDate}</div>
              </div>
              <div className="info">
              <div className="job">{item.jobTitle}</div>
              <div className="employer">{item.employer}</div>
              
              <ul className="list">
                {item.points.map((point) => {
                  return <li key={point.id}>{point.point}</li>;
                })}
              </ul>
              </div>
            </div>
          );
        })}
      </div>
    
    );
  }
}

export default WorkExperienceInstance;
