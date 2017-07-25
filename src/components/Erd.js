import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import axios from "axios";

class Erd extends Component {
  constructor(props) {
      super(props);

      this.state = {
        // this is supposed to represent a URL, is this correct?
          erd: " ",
      };
  }

  render() {
    return (
        <div className="row margin-top-20">
            <div className="col-sm-3">
                <img src={this.state.erd}  className="img-responsive" />
            </div>
        </div>
        );
    }
}

export default Erd;
