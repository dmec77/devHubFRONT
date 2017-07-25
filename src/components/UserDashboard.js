import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import axios from "axios";

// import ProjectName from "./ProjectName";


class UserDashboard extends Component {
  constructor(props) {
      super(props);

      this.state = {
          first: " ",
          last: " ",
          email: " ",
          project_name: []

    };
 }

  componentDidMount() {
    axios
    .get(`http://localhost:8000/users/${window.localStorage.id}`, {
        headers: {
            "Authorization": window.localStorage.getItem("token")
        }
    })

    .then((response) => {
      const projectsData = response.data;

    // console.log(response);

      this.setState({
          // projects: this.state.project_name
          first:  response.data.first,
          last: response.data.last,
          email: response.data.email
    });
 })

      .catch((err) => {
      console.log(err);
  });
}

//   destroyProject(index, user_id, project_id) {
//     axios
//     .delete
// (`https://localhost8000/users/${user_id}/project_name/${project_id}`, {
//         headers: {
//             "Authorization": window.localStorage.getItem("token")
//          }
//      })
//   }
//     .then(() => {
//         this.state.project_name.splice(index, 1);
//
//         this.setState({
//             // projects: this.state.project_name
//             first:  response.data.first,
//             last: response.data.last,
//             email: response.data.email
//         });
//     })
//     .catch((err) => {
//         console.log(err);
//     });

  render() {
      return (
        <div className="userdash-page jumbotron">
              <div className="userdash-form">
                  <div className="userdash-field-div">

                      <div className="userdash-field">
                          {this.state.first} {this.state.last}
                      </div>

                      <div>
                          {this.state.email}
                      </div>

                      <ul>

                          <div>
                            <h2 className="txt-center"></h2>
                            <h5 className="txt-center">{ window.sessionStorage.getItem("user_id") }
                            <Link to="/users/projectdashboard">Create New Project</Link>
                             </h5>

                           </div>
                       </ul>
                    </div>
               </div>
         </div>
       );
     }
   }



export default UserDashboard;
