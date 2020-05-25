import React from "react";
import axios from "axios";
import Organizers from "../components/Organiser";


const env = process.env.NODE_ENV || "development";
const serverUrl =
    env === "development"
        ? "http://127.0.0.1:8000"
        : "https://omatko-app-backend.herokuapp.com";

class OrganizerList extends React.Component {
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
        <Organizers data={this.state.organizers} /> <br />
      </div>
    );
  }
}

export default OrganizerList;
