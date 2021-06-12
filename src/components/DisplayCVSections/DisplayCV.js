import React, { Component } from "react";
import "../../css/DisplayCV.css";
import Button from "../Button";
import { format } from "date-fns";
import WorkExperienceInstance from "./WorkExperienceInstance";
import EducationInstance from "./EducationInstance";
import uniqid from "uniqid";
import Skills from "./Skills";

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
            id: uniqid(),
            jobTitle: "Marketing Assistant",
            employer: "Big Red Company",
            startDate: format(new Date(2018, 1, 11), "yyyy-MM"),
            endDate: format(new Date(2020, 1, 11), "yyyy-MM"),
            points: [
              { id: uniqid(), point: "Very good at doing the work" },
              { id: uniqid(), point: "I was promoted to manage 5 people" },
              {
                id: uniqid(),
                point:
                  "Implemented new marketing initiatives that led to the growth of the department",
              },
              {
                id: uniqid(),
                point:
                  "Trained and developed relationships with multiple new suppliers",
              },
            ],
          },
          {
            id: uniqid(),
            jobTitle: "IT Support",
            employer: "Big Corporation",
            startDate: format(new Date(2016, 5, 11), "yyyy-MM"),
            endDate: format(new Date(2018, 1, 11), "yyyy-MM"),
            points: [
              { id: uniqid(), point: "Fixed all of the computers" },
              { id: uniqid(), point: "Was given a gold star every week" },
              {
                id: uniqid(),
                point:
                  "The lead IT consultant for a company of over 200 employees",
              },
              {
                id: uniqid(),
                point:
                  "Introduced initiatives that reduced the time to close IT requests byt over 50%",
              },
            ],
          },
        ],
        education: [
          {
            qualification: "Computer Science",
            grade: "2:1",
            school: "Really Great University",
            startDate: format(new Date(2013, 3, 11), "yyyy-MM"),
            endDate: format(new Date(2015, 5, 11), "yyyy-MM"),
          },
        ],
        skills: ["Microsoft Office", "Javascript"],
      },
    };
    this.whichView = this.whichView.bind(this);
    this.displayPreview = this.displayPreview.bind(this);
    this.previewCV = this.previewCV.bind(this);
    this.generatePDF = this.generatePDF.bind(this);
  }

  whichView(key = "") {
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
      cv.className = "";
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
    // if (this.state.cvView === "small-view") {
    //   cv.className = "small-view";
    // } else {
    //   cv.className = "preview";
    // }
    cv.className = this.state.cvView
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
    return (
      <div className="display-cv-section">
        <div className="cv-and-buttons">
          <div className="cv-buttons">
            <Button
              onSubmit={this.displayPreview}
              text={this.state.buttonText}
            />
            <Button
              onSubmit={this.previewCV}
              text={this.state.previewButtonText}
            />
            <Button onSubmit={this.generatePDF} text="Download CV" />
          </div>
          <div className="cropper">
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
                <div className="emailD">{whichView("email")}</div>
              </div>
              <div className="titleLeft">
                <div className="contactTitle">Skills</div>
              </div>
              <Skills
                whichView={whichView}
                preview={this.state.preview.skills}
                inputs={this.props.inputs.skills}
              />
            </div>
            <div className="main-content">
              <div className="summaryD">{whichView("summary")}</div>
              <div className="work-history-title">Work History</div>
              <WorkExperienceInstance
                whichView={whichView}
                preview={this.state.preview.workExperience}
                inputs={this.props.inputs.workExperience}
              />
              <div className="work-history-title">Education</div>
              <EducationInstance
                whichView={whichView}
                preview={this.state.preview.education}
                inputs={this.props.inputs.education}
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayCV;
