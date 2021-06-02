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
                    <input onChange={(e) => this.props.captureWE(e)} type="date" name="startDate"></input>
                    </label>
                    <br/>
                    <label>
                        End Date
                    <input onChange={(e) => this.props.captureWE(e)} type="date" name="endDate"></input>
                    </label>
                    <Input handleChange={(e) => this.props.captureWE(e)} name="jobTitle" placeholder="Job Title"/>
                    <Input handleChange={(e) => this.props.captureWE(e)} name="employer"  placeholder="Employer"/>
                    <div>Add Tasks</div>
                    <div>
                        {this.props.points.map((point, index) => {
                            
                            let position = this.props.points.indexOf(point)
                            console.log(position)
                            return <Input key={point.id} handleChange={(e) => this.props.captureTask(e, position)}  placeholder="Add role information"/>
                        })}
                    </div>
                    {/* <Input handleChange={(e) => this.props.captureTask(e, 0)}  placeholder="Add role information"/> */}
                    <Button onSubmit={(e) => this.props.addPoint(e)} text="Add item" />
                    <Button onSubmit={(e) => this.props.deletePoint(e)}text="Delete item" />
                    

                </form>
            </div>
        )
    }
}

export default WorkExperience
