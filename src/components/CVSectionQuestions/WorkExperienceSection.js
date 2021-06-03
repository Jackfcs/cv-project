import React, { Component } from 'react'
import WorkExperience from './WorkExperience'
import Button from '../Button'
import "../../css/WorkExperienceSection.css"

class WorkExperienceSection extends Component {
    constructor(props){
        super()
        
    }
    render() {
        return (
            <div>
                <div>Add Work Experience</div>
                <WorkExperience
                    points={this.props.points}
                    deletePoint={(e) => this.props.deletePoint(e)}
                    addPoint={(e) => this.props.addPoint(e)}  
                    captureWE={(e) => this.props.captureWE(e) } 
                    captureTask={(e, index) => this.props.captureTask(e, index)}
                />
                <Button text="Delete Work Experience" />
                <Button text="Add Work Experience" />
            </div>
        )
    }
}

export default WorkExperienceSection
