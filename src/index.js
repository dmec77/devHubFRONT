// Set up your application entry point here...
import React from "react";
import ReactDom from "react-dom";
import { Route, Router, browserHistory } from "react-router";

//Application assets
import "./styles.css";
// import "../bootstrap";
// import "./assets/js/app.js";


import Landing from "./components/Landing";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

// import User from "./components/User";
import UserDashboard from "./components/UserDashboard";
import NewProject from "./components/NewProject";
import ProjectDashboard from "./components/ProjectDashboard";

import ProjectName from "./components/ProjectName";
import Proposal from "./components/Proposal";
import Features from "./components/Features";
import Bonus from "./components/Bonus";
import Technologies from "./components/Technologies";
import Issues from "./components/Issues";
import Wireframes from "./components/Wireframes";
import UserStories from "./components/UserStories";
import Erd from "./components/Erd";


const restrict = () => {
    if (!window.localStorage.getItem("token")) {
        browserHistory.push("users/login");
    }
};

ReactDom.render(
  <Router history={browserHistory}>
     <Route path="/" component={Landing}  />
     <Route path="/signup" component={SignUp} />
     <Route path="/users/login" component={Login} />

     <Route path="/users/:id/projects" component={UserDashboard} onEnter={restrict} />
     <Route path="/users/newprojects" component={NewProject} onEnter={restrict} />
      <Route path="/users/projectdashboard" component={ProjectDashboard} onEnter={restrict} />

      <Route path="/users/projectname" component={ProjectName} onEnter={restrict} />
      <Route path="/users/proposal" component={Proposal} onEnter={restrict} />
      <Route path="/users/features" component={Features} onEnter={restrict} />
      <Route path="/users/bonus" component={Bonus} onEnter={restrict} />
      <Route path="/users/technologies" component={Technologies} onEnter={restrict} />
      <Route path="/users/issues" component={Issues} onEnter={restrict} />
      <Route path="/users/wireframes" component={Wireframes} onEnter={restrict} />
      <Route path="/users/userstories" component={UserStories} onEnter={restrict} />
      <Route path="/users/erd" component={Erd} onEnter={restrict} />
  </Router>
      //  <Route path="/users" component={User} />

, document.getElementById("app"));
