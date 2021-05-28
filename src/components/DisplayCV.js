import React, { Component } from "react";
import "../css/DisplayCV.css";
import Button from './Button'

class DisplayCV extends Component {
  constructor(props) {
    super();
    this.state = {
        viewing: "preview",
        buttonText: "Preview Your CV",
        preview: {
            firstName: "Joe",
            lastName: "Bloggs",
            profession: "Software Developer",
            city: "Oxford",
            postCode: "OX6 9XD",
            phone: "07712345678",
            email: "joebloggs@myemail.com",
        }

    }
    this.whichView = this.whichView.bind(this)
    this.displayPreview = this.displayPreview.bind(this)
  }

  whichView(key){
    if (this.state.viewing === "preview"){
        return this.state.preview[key]
    } else if (this.state.viewing === "custom") {
        
        return this.props.inputs[key]
    }
  }

  displayPreview(){
      if (this.state.viewing === "preview"){
          this.setState({
              viewing: "custom",
              buttonText: "View Template"
          })
      } else {
        this.setState({
            viewing: "preview",
            buttonText: "Preview Your CV"
        })
      }
  }


  render() {
    console.log("props", this.props)
    
    const {whichView} = this
    
    return (
    <div>
    <Button onSubmit={this.displayPreview} text={this.state.buttonText}/>
      <div className="cv-display-container">
        <div className="leftBar">
          <div className="nameD">{whichView("firstName")} {whichView("lastName")} </div>
          <div className="professionD">{whichView("profession")}</div>
            <div className="contactD">
                <div className="titleLeft">
                    <div className="contactTitle">Contact</div>
                </div>
                
                <div className="cityPostD">{whichView("city")}, {whichView("postCode")}</div>
                <div className="phoneD">{whichView("phone")}</div>
                <div className="emaildD">{whichView("email")}</div>
            </div>
        </div>
      </div>
    </div>
    );
  }
}

export default DisplayCV;
