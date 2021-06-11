import React, { Component } from "react";
import "../../css/WorkExperienceInstance.css"

class WorkExperienceInstance extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    let result = this.props.whichView("workExperience");
    let y = /\d{4}/
    let m = /\d+$/
    let dateStart
    let dateEnd

    
    return (
      <div>
        {result.map((item) => {

          if(item.startDate.match(m) != null){
            dateStart = item.startDate.match(m) + '-' + item.startDate.match(y)
          } else {
            dateStart = ''
          }

          if(item.endDate.match(m) != null){
            dateEnd = item.endDate.match(m) + '-' + item.endDate.match(y)
          } else {
            dateEnd = ''
          }


          return ( 
            <div className="WE" key={item.id}>
              <div className="dates">
                
                <div className="start">{dateStart}-</div>
                <div className="end">{dateEnd}</div>
              </div>
              <div className="info">
                <div className="job">{item.jobTitle}</div>
                <div className="employer">{item.employer}</div>
                
                <ul className="list">
                  {item.points.map((point) => {
                    return <span key={point.id}>- {point.point}<br/></span>;
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
