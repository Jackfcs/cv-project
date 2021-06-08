import React, { Component } from 'react'
import WorkExperience from './WorkExperience'
import Button from '../Button'
import "../../css/WorkExperienceSection.css"

class WorkExperienceSection extends Component {
    constructor(props){
        super()
        
    }
    render() {
        let WES
        if (this.props.questionState === 3) {
            WES = <div>
            <div>Add Work Experience</div>

            <div>
                    
                    
                    {this.props.inputs.workExperience.map((WEInstance, index) => {
                        
                        
                        return <WorkExperience
                                WEInstance={WEInstance}
                                WEIndex={index}
                                key={index}
                                weCount={this.props.weCount}
                                deletePoint={(e, we) => this.props.deletePoint(e, we)}
                                addPoint={(e) => this.props.addPoint(e, index)}
                                captureWE={(e) => this.props.captureWE(e, index)} 
                                captureWEDate={(e) => this.props.captureWEDate(e, index)}
                                captureTask={(e, index, we) => this.props.captureTask(e, index, we)}
                                inputs={this.props.inputs}
                                />
                    })}
                </div>

            
            
            <Button onSubmit={(e) => this.props.addWE(e)} text="Add Work Experience" />
            <Button onSubmit={(e) => this.props.deleteWE(e)} text="Delete Work Experience" />
        </div>
        }

        return (
            <div>{WES}</div>
        )
    }
}

export default WorkExperienceSection
