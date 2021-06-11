import React, { Component } from 'react'
import "../../css/EducationInstance.css";

export class EducationInstance extends Component {
    constructor(props){
        super()

    }




    render() {
        let y = /\d{4}/
        let m = /\d+$/
        let dateStart
        let dateEnd

        let result = this.props.whichView("education")
        return (
            <div>
                {result.map((item, index) =>{

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

                    return(
                    <div className="education" key={index}>
                    <div className="dates">
                      <div className="start">{dateStart} -</div>
                      <div className="end">{dateEnd}</div>
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
