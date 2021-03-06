import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import axios from "axios";


class Proposal extends Component {
  constructor(props) {
  super(props);

  this.state = {
      proposal: ''
   };
}


handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}

render() {
    return (

      <form action="#" id="js-form"

       onSubmit={this.handleSubmit}>

        <div class="message">
          <label for="textarea">App Proposal:</label>
          <textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>

          <input type="text" value={this.state.value} onChange={this.handleChange} />


          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default Proposal;
