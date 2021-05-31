import React, { Component } from "react";
import "../../css/DisplayCV.css";
import Button from "../Button";
import {format} from 'date-fns'

class DisplayCV extends Component {
  constructor(props) {
    super();
    this.state = {
      viewing: "preview",
      buttonText: "View Your CV",
      cvView: "small-view",
      previewButtonText: "Preview CV",
      preview: {
        firstName: "Joe",
        lastName: "Bloggs",
        profession: "Software Developer",
        city: "Oxford",
        postCode: "OX6 9XD",
        phone: "07712345678",
        email: "joebloggs@myemail.com",
        summary:
          "Target-driven senior sales negotiator with 10 years experience in luxury home sales. Highly competent in sales progression using all avenues of communication to speed sales process. Accurate valuation skills and sales figures that consistently exceed targets by +15%. Aiming to continue delighting clients with high levels of service.",
        workExperience: [
          {
            jobTitle: "Marketing Assistant",
            employer: "Big Red Company",
            startDate: format(new Date(2018, 1, 11), "dd/MM/yyyy"),
            endDate: format(new Date(2020, 1, 11), "dd/MM/yyyy"),
            points: [
              "Very good at doing the work",
              "I was promoted to manage 5 people",
            ],
          },
        ],
      },
    };
    this.whichView = this.whichView.bind(this);
    this.displayPreview = this.displayPreview.bind(this);
    this.previewCV = this.previewCV.bind(this);
    this.generatePDF = this.generatePDF.bind(this);
  }

  whichView(key) {
    if (this.state.viewing === "preview") {
      return this.state.preview[key];
    } else if (this.state.viewing === "custom") {
      return this.props.inputs[key];
    }
  }

  displayPreview() {
    if (this.state.viewing === "preview") {
      this.setState({
        viewing: "custom",
        buttonText: "View Template",
      });
    } else {
      this.setState({
        viewing: "preview",
        buttonText: "View Your CV",
      });
    }
  }

  generatePDF() {
    const cv = document.getElementById("cv-display-container");
    if (this.state.cvView === "small-view" || this.state.cvView === "preview") {
      cv.className = ''
    }
    let opt = {
      margin: 0,
      filename: "My CV",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 3 },
      type: "png",
      jsPDF: {
        orientation: "portrait",
      },
    };
    window.html2pdf(cv, opt);
    if (this.state.cvView === "small-view") {
      cv.className = "small-view"
    } else {
        cv.className = "preview"
    }
  }

  previewCV() {
    if (this.state.cvView === "small-view") {
      this.setState({
        cvView: "preview",
        previewButtonText: "Hide Preview",
      });
    } else if (this.state.cvView === "preview") {
      this.setState({
        cvView: "small-view",
        previewButtonText: "Preview CV",
      });
    }
  }

  render() {
    const { whichView } = this;
    console.log(this.state.preview.workExperience[0].startDate)
    return (
      <div>
          <div className="cv-buttons">
        <Button onSubmit={this.displayPreview} text={this.state.buttonText} />
        <Button onSubmit={this.previewCV} text={this.state.previewButtonText} />
        <Button onSubmit={this.generatePDF} text="Download CV" />
        </div>
        <div id="cv-display-container" className={this.state.cvView}>
          <div className="leftBar">
            <div className="nameD">
              {whichView("firstName")} {whichView("lastName")}{" "}
            </div>
            <div className="professionD">{whichView("profession")}</div>
            <div className="contactD">
              <div className="titleLeft">
                <div className="contactTitle">Contact</div>
              </div>

              <div className="cityPostD">
                {whichView("city")}, {whichView("postCode")}
              </div>
              <div className="phoneD">{whichView("phone")}</div>
              <div className="emaildD">{whichView("email")}</div>
            </div>
          </div>
          <div className="main-content">
        <div className="summaryD">{whichView("summary")}</div>
        <div className="work-history-title">Work History</div>
            <div className="startDateD">{whichView("workExperience.[0].startDate")}</div>
            <div className="endDateD">{this.state.preview.workExperience[0].endDate}</div>
            <div className="jobTitleD"></div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default DisplayCV;
