import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import axios from "axios";



class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        axios
        .post("http://localhost:8000/users/login", {
            // users: {
              email: this.state.email,
              password: this.state.password,
          // }
        })
        .then((response) => {
            const token = response.data.token;
            console.log(response);
            window.localStorage.setItem("token", token);
            window.localStorage.setItem('id', response.data.user_id)
            browserHistory.push(`/users/${window.localStorage.id}/projects`);
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
            <div className="login-page">
                <div className="login-form">
                    <form
                    onSubmit={this.handleSubmit.bind(this)}>
                        <h2>Welcome Back!</h2>

                        <div className="login-field-div">
                            <input onChange={this.handleChange.bind(this)} name="email" type="email" className="login-field" placeholder="Email Address" />
                        </div>

                        <div className="login-field-div">
                            <input onChange={this.handleChange.bind(this)} name="password" type="password" className="login-field" placeholder="Password" />
                        </div>

                        <a href="#" className="forgot">forgot password?</a>

                        <div className="login-button-div">
                            <button type="submit" className="login-button">Login</button>
                        </div>

                        <div className="shadow"></div>

                        <div className="create-field-div">
                            <Link to="/signup">Create an account</Link>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
