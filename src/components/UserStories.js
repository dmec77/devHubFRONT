import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import axios from "axios";

class UserStories extends Component {
  constructor(props) {
      super(props);

      this.state = {
        // this is supposed to represent a URL, is this correct?
          user_stories: " ",
      };
  }

  render() {
    return (
        <div className="row margin-top-20">
            <div className="col-sm-3">
                <img src={this.state.userstories}  className="img-responsive" />
            </div>
        </div>
        );
    }
  }

export default UserStories;
