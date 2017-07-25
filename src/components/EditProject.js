import React, { Component } from "react";
import axios from "axios";
import { browserHistory } from "react-router";


class EditProject extends Component {
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

    componentDidMount() {
        axios
        .get(`http://localhost8000${this.props.params.id}`, {
            headers: {
                "Authorization": window.localStorage.getItem("token")
            }
        })
        .then((response) => {
            const user = response.data;

            this.setState(user);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        axios
        .put(`http://localhost8000.com/owners/${this.props.params.id}`, {
            user: this.state
        }, {
            headers: {
                "Authorization": window.localStorage.getItem("token")
            }
        })
        .then(() => {
            browserHistory.push("/");
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

            <h2 className="txt-center">Edit User</h2>

            <div className="container well small-container margin-top-20">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="bold">
                        First Name
                    </div>
                    <div className="margin-top-10">
                        <input onChange={this.handleChange.bind(this)} name="first_name" type="text" className="form-control" value={this.state.first_name} />
                    </div>
                    <div className="bold margin-top-10">
                        Last Name
                    </div>
                    <div className="margin-top-10">
                        <input onChange={this.handleChange.bind(this)} name="last_name" type="text" className="form-control" value={this.state.last_name} />
                    </div>
                    <div className="bold margin-top-10">
                        Email
                    </div>
                    <div className="margin-top-10">
                        <input onChange={this.handleChange.bind(this)} name="email" type="email" className="form-control" value={this.state.email} />
                    </div>
                    <div className="margin-top-20 txt-center">
                        <button type="submit" className="btn btn-primary">Submit Edit</button>
                    </div>
                </form>
            </div>
        </div>
      );
    }
  }

export default EditProject;
