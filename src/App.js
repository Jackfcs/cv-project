import "./App.css";
import React, { Component } from "react";
import PersonalInfo from "./components/CVSections/PersonalInfo";
import Header from "./components/Header";
import DisplayCV from "./components/DisplayCV";
import Button from './components/Button'

class App extends Component {
  constructor(){
    super();
    this.state = {
        
      inputs: {
        firstName: "",
        lastName: "",
        profession: "",
        city: "",
        postCode: "",
        phone: "",
        email: "",
      },
      className: '',
      buttonText: "Submit"
    };

    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleChange(e, component) {
    const value = e.target.value;
    component.setState({
      inputs: {
        ...component.state.inputs,
        [e.target.name]: value,
      },
    });
  }

  onSubmit(){
    if (this.state.className === ""){
      this.setState({
        className: "hide",
        buttonText : "Edit"
      }) 
      
    } else {
      this.setState ({
        className: "",
        buttonText: "Submit"
      })
    }
  }

  render(){
    
  
    return (
      <div className="App">
        <Header />
        <PersonalInfo className={this.state.className} handleChange={(e) => this.handleChange(e, this)}/>
        <Button text={this.state.buttonText} onSubmit={this.onSubmit}/>
        <DisplayCV inputs={this.state.inputs}/>
      </div>
    );
  }
}

export default App;
