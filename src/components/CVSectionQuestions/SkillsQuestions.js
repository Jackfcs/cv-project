import React, { Component } from 'react'
import Input from "../Input";
import Button from "../Button"

class SkillsQuestions extends Component {
    constructor(props){
        super()
    }


    render() {
        console.log(this.props)
        return (
            <div>
                <div>Skills</div>{}

                {this.props.skills.map((skill, index) => {
                    return <Input key={index} handleChange={(e) => this.props.captureSkill(e, index)} placeholder="Add Skill"/>
                })}
                
                <Button onSubmit={(e) => this.props.addSkill(e)} text="Add Skill"/>
                <Button onSubmit={(e) => this.props.deleteSkill(e)} text="Delete Skill"/>
            </div>
        )
    }
}

export default SkillsQuestions
