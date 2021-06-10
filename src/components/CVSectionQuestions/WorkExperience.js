import React, { Component } from 'react'
import Input from "../Input"
import Button from '../Button'

class WorkExperience extends Component {
    constructor(props){
        super()
        this.state = {

        }
    }

   
   

    render() {
        return (
            
            <div>

                <form>
                    <label>
                        Start Date
                    <input  value={this.props.WEInstance.startDate} onChange={(e) => this.props.captureWEDate(e)} type="month" name="startDate"></input>
                    </label>
                    <br/>
                    <label>
                        End Date
                    <input value={this.props.WEInstance.endDate} onChange={(e) => this.props.captureWEDate(e)} type="month" name="endDate"></input>
                    </label>
                    <Input value={this.props.WEInstance.jobTitle} handleChange={(e) => this.props.captureWE(e)} name="jobTitle" placeholder="Job Title"/>
                    <Input value={this.props.WEInstance.employer} handleChange={(e) => this.props.captureWE(e)} name="employer"  placeholder="Employer"/>
                    <div>Add Tasks</div>

                    

                    <div>
                        {this.props.WEInstance.points.map(
                            (point, index) => {
                            return (
                                <Input
                                value={this.props.WEInstance.points[index].point}
                                key={point.id}
                                handleChange={(e) => this.props.captureTask(e, index, this.props.WEIndex)}
                                placeholder={"Add role information "}
                                />
                            );
                            }
                        )}
                    </div>
                   
                    
                    <Button onSubmit={(e) => this.props.addPoint(e)} text="Add item" />
                    <Button onSubmit={(e) => this.props.deletePoint(e,this.props.WEIndex)}text="Delete item" />
                    

                </form>
            </div>
        )
    }
}

export default WorkExperience
