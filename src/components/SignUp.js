import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import axios from "axios";




class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first: "",
            last: "",
            email: "",
            password: ""
        };
    }

      handleSubmit(event) {
      event.preventDefault();

      axios
      .post("http://localhost:8000/users", {
        user: this.state
    })
    .then((user) => {
        console.log(user);
        browserHistory.push("/users/login");
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
      <div className="signup-page">

          <div className="signup-form">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <h2>Create Account</h2>

                    <div className="signup-field-div" >
                        <input onChange={this.handleChange.bind(this)} name="first" type="text" className="signup-field" placeholder="First Name" />
                    </div>

                    <div className="signup-field-div">
                        <input onChange={this.handleChange.bind(this)} name="last" type="text" className="signup-field" placeholder="Last Name" />
                    </div>

                    <div className="signup-field-div">
                        <input onChange={this.handleChange.bind(this)} name="email" type="email" className="signup-field" placeholder="Email Address" />
                    </div>

                    <div className="signup-field-div">
                        <input onChange={this.handleChange.bind(this)} name="password" type="password" className="signup-field" placeholder="Password" />
                    </div>

                    <div className="signup-button-div">
                        <button type="submit" className="signup-button">Sign Up</button>
                    </div>

                    <div className="shadow"></div>

                      <br></br>
                      <br></br>

                      <a href="https://github.com/" className="github"><img src="./GitHub-Mark-64px.png"  className="github-link"/>                      <span>Or Sign Up using your GitHub account</span></a>
              </form>
          </div>
      </div>
    );
  }
}

<div className="log-up-button">
    <Link to="/login">Already have an account? Log in</Link>
</div>

export default SignUp;
