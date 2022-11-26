import React from "react";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import profile_pic from "../images/chinmay15.jpg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="row">
              <div className="col">
                <div className="page-header-image">
                  <img
                    src={profile_pic}
                    width="250px"
                    alt="Chinmay's Pic"
                    className="img-thumbnail mx-auto d-block"
                  />
                </div>
                <div className="button-container text-center">
                  <Button
                    link="https://github.com/chinmay1503"
                    tooltip="Browse Github"
                    iconClassName="fa fa-github"
                  />
                  <Button
                    link="https://www.linkedin.com/in/chinmay15/"
                    tooltip="Connect with me on LinkedIn"
                    iconClassName="fa fa-linkedin"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card-body">
                <SectionHeading
                  headingCss="h4 mt-0 title"
                  headingText="About"
                />
                <p>
                  Hello! I am Chinmay Tawde currently a Graduate Student at
                  Portland State University pursuing Master's Degree in Computer
                  Science.
                </p>
                <p>
                  My cumulative GPA is 3.9 and I would be graduating in December
                  2022. I am looking for full time opportunities starting from
                  January 2023
                </p>
                <p>
                  I recently completed two Internships at two major
                  corporations, both dominant in their own domains
                  (Semiconductor and Supply Chain & Logistics). The first at
                  Intel wherein I worked as a Software Development Intern and
                  the other at Walmart wherein I worked as a Software Engineer
                  III Intern. More details on my experience with both companies
                  is provided below
                </p>
                <p>
                  I have also worked as a full-time Software Engineer at an
                  Indian Subsidiary (List India Pvt Ltd) of an Italian company
                  named "List SpA" for over 2.5 years ( Jul 2018 - Jan 2021 )
                  before coming to the US for pursuing my Master's Degree.
                </p>
                <p>
                  Please go through the entire portfolio to know more about me!
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card-body">
                <SectionHeading
                  headingCss="h4 mt-0 title"
                  headingText="Basic Information"
                />
                <div className="row">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Age:</strong>
                  </div>
                  <div className="col-sm-8">26</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Email:</strong>
                  </div>
                  <div className="col-sm-8">chinmaytawde15@gmail.com</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Phone:</strong>
                  </div>
                  <div className="col-sm-8">+1 503-984-5000</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Address:</strong>
                  </div>
                  <div className="col-sm-8">
                    1604 SW Clay St, Apt 502, 97201, Portland, OR, U.S.A
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Languages:</strong>
                  </div>
                  <div className="col-sm-8">English, Hindi, Marathi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
