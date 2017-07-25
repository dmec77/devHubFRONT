import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import axios from "axios";


class Bonus extends Component {
  constructor(props) {
    super(props);

    this.state = {
        bonus: ''
    };
}


handleChange(event) {
  this.setState({value: event.target.value});
}


handleSubmit(event) {
  event.preventDefault();
}

render() {
    return (

      <form action="#" id="js-form"

       onSubmit={this.handleSubmit}>

        <div className="message">
          <label htmlFor="textarea">Wish List Features:</label>
          <textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>

          <input type="text" value={this.state.value} onChange={this.handleChange} />


          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default Bonus;
