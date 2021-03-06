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
        if (this.props.questionState === 2) {
            WES = <div>
            <h3>Enter your work experience</h3>

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

            
            <div className="we-button">
                <Button className="add-delete" onSubmit={(e) => this.props.addWE(e)} text="Add Work Experience" />
                <Button className="add-delete" onSubmit={(e) => this.props.deleteWE(e)} text="Delete Work Experience" />
            </div>
        </div>
        }

        return (
            <div>{WES}</div>
        )
    }
}

export default WorkExperienceSection
