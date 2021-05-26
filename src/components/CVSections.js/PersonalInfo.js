import React, { Component } from 'react'
import Name from './Name'
import Contact from './Contact'

class PersonalInfo extends Component {
    render() {
        return (
            <div>
                <Name />
                <Contact />
            </div>
        )
    }
}


export default PersonalInfo