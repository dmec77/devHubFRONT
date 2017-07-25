import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import axios from "axios";




class ProjectName extends Component {
constructor(props) {
    super(props);

    this.state = {
        project_name: ''
   };
}

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  // alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}

render() {
    return (

// Which should I be using
      // <form action
      // <form action="#" id="js-form"
      //
      //  onSubmit={this.handleSubmit}>
      //
      //   <div className="proj-name">
      //     <input type="text" name="name" placeholder="Project Name" />
      //
      //     <input type="text" value={this.state.value} onChange={this.handleChange} />
      //
      //
      //     <input type="submit" value="Submit" />
      //   </div>
      // </form>

      <div>

      {this.props.project_name}

      </div>
    );
  }
}


export default ProjectName;
