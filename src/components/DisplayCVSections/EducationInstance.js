import React, { Component } from 'react'
import "../../css/Education.css";

export class EducationInstance extends Component {
    constructor(props){
        super()

    }




    render() {

        let result = this.props.whichView("education")
        return (
            <div>
                {result.map((item, index) =>{
                    return(
                    <div className="education" key={index}>
                    <div className="dates">
                      <div className="start">{item.startDate} -</div>
                      <div className="end">{item.endDate}</div>
                    </div>
                    <div className="info">
                    <div className="job">{item.qualification} {item.grade}</div>
                    <div className="employer">{item.school}</div>
                    </div>

                    </div>
                    )
                })}
            </div>
        )
    }
}

export default EducationInstance
