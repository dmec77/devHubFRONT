import React, { Component } from "react";
import { browserHistory } from "react-router";
import axios from "axios";

class NewProject extends Component {
  constructor(props) {
      super(props);

      this.state = {
        project_name: " ",
        proposal: " ",
        user_stories: " ",
        wireframes: " ",
        erd: " ",
        technologies: " ",
        features: " ",
        bonus: " ",
        issues: " "
    };
}

handleSubmit(event) {
event.preventDefault();

axios
.post("http://localhost:8000/users/:id/projects", {
  user: this.state
})
.then((newproject) => {
  console.log(newproject);
  browserHistory.push("/users/:user_id/projects/:id");
})
.catch((err) => {
  console.log(err);
});
}

handleChange(event) {
this.setState({
  [event.target.name]: event.target.value
});
}

render() {
return (
<div>

    <div className="new-project">
        <form onSubmit={this.handleSubmit.bind(this)}>
              <h2>Create New Project</h2>

              <br/>

          <div className="project-field-title">
            Project Name
          </div>
              <div className="new-project-field">
                  <input onChange={this.handleChange.bind(this)} name="project_name" type="text" className="new-project-control" placeholder="title of your project" />
              </div>

          <div className="project-field-title">
            Proposal
          </div>
              <div className="new-project-field">
                  <input onChange={this.handleChange.bind(this)} name="proposal" type="text" className="new-project-control" placeholder="description of the project" />
              </div>

          <div className="project-field-title">
            Features
          </div>
              <div className="new-project-field">
                  <input onChange={this.handleChange.bind(this)} name="features" type="text" className="new-project-control" placeholder="what features will be included" />
              </div>

          <div className="project-field-title">
            Bonus Features
          </div>
              <div className="new-project-field">
                  <input onChange={this.handleChange.bind(this)} name="bonus" type="text" className="new-project-control" placeholder="wish-list features if time permits" />
              </div>

          <div className="project-field-title">
            Technologies
          </div>
              <div className="new-project-field">
                  <input onChange={this.handleChange.bind(this)} name="Technologies" type="text" className="new-project-control" placeholder="what technologies will you be using" />
              </div>

          <div className="project-field-title">
            Wireframes
          </div>
              <div className="new-project-field">
                  <input onChange={this.handleChange.bind(this)} name="wireframes" type="url" className="new-project-control" placeholder="place the URL link to your wireframes" />
              </div>


          <div className="project-field-title">
            User Stories
          </div>
              <div className="new-project-field">
                  <input onChange={this.handleChange.bind(this)} name="user_stories" type="url" className="new-project-control" placeholder="place the URL link to your user stories" />
              </div>

          <div className="project-field-title">
            ERD
          </div>
              <div className="new-project-field">
                  <input onChange={this.handleChange.bind(this)} name="erd" type="url" className="new-project-control" placeholder="place the URL link to your ERD's" />
              </div>
<br></br>
              <div className="new-project-field">
                  <button type="submit" className="new-project-button">Save My New Project</button>
              </div>
          <div className="project-field-title">
            Upon Submission, the project dashboard with your new project will appear.
          </div>
          </form>
        </div>
      </div>
    );
  }
}

  // <div className="new-project-field">
  //    <input onChange={this.handleChange.bind(this)} name="Issues" type="text" className="new-project-control" placeholder="Issues" />
  // </div>


 //  <div className="new-project-field">
 //      <Link to="/login">Already have an account? Log in</Link>
 // </div>


export default NewProject;
