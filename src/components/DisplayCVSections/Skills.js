import React, { Component } from 'react'

class Skills extends Component {
    constructor(props){
        super()
    }


    render() {
        let result = this.props.whichView("skills")
        return (
            <div>
                {result.map((item, index) => {
                    return (
                        <ul key={index}>
                            <li>{item}</li>
                        </ul>
                    )
                })}
            </div>
        )
    }
}

export default Skills
