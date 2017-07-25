import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import axios from "axios";
// import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';

// import Nav from "./Nav";

// Access this when you click create on User Dash

class ProjectDashboard extends Component {
  constructor(props) {
      super(props);

      this.state = {
          project_name: " ",
          proposal: " ",
          features: " ",
          bonus: " ",
          technologies: " ",
          issues: " ",
          wireframes: " ",
          user_stories: " ",
          erd: " "
  };
}

  render() {
    return (
      <div className="dashboard-div">
          <div className="project-name-div">{this.props.project_name}</div>
          <div className="proposal-div"> </div>
          <div className="features-div"> </div>
          <div className="bonus-div"> </div>
          <div className="technologies-div"> </div>
          <div className="issues-div"> </div>
          <div className="wireframes-div"> </div>
          <div className="user-stories-div"> </div>
          <div className="erd-div"> </div>
      </div>

      )
    }
  }

export default ProjectDashboard;

//         // Nav Bar DIV
//
// Instead of filling the JSX fo each of these can I just reference them to another file, so thisfile isnt so large?
//
// OR do I just put something like this here ONLY:
//      something:={this.props."ProjectName".something}
//
//   when do I have to use the "Unique Key={index}"
//         <ProjectName  />
//         <Proposal  />
//         <Features />
//         <Bonus  />
//         <Issues />
//         <Wireframes />
//         <Erd />
//         <User_Stories />
//         <Technologies />
