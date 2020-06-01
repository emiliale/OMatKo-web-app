import React from "react";
import axios from "axios";
import Organisers from "../components/Organisers";   
        
const env = process.env.NODE_ENV || "development";
const serverUrl =
    env === "development"
      ? "http://127.0.0.1:8000"
      : "https://omatko-app-backend.herokuapp.com";
        
class OrganisersList extends React.Component {
          state = {
            organizers: []
          };
        
          fetchOrganizers = () => {
            axios.get(`${serverUrl}/apiOrganizer/`).then(res => {
              this.setState({
                organizers: res.data
              });
            });
          }
        
          componentDidMount() {
            this.fetchOrganizers();
          }
        
        
          render() {
            return (
              <div>
                <Organisers data={this.state.organizers} /> <br />
              </div>
            );
          }
        }
export default OrganisersList;