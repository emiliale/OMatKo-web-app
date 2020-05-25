import React from "react";
import axios from "axios";

import { Button, Card } from "antd";

const env = process.env.NODE_ENV || "development";
const serverUrl =
    env === "development"
        ? "http://127.0.0.1:8000"
        : "https://omatko-app-backend.herokuapp.com";


class Organisers extends React.Component {
  state = {
    organizers: []
  };

  fetchSponsors = () => {
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
        <Card title={this.state.organizers.surname}>
          <p> {this.state.organizers.first_name} </p>
        </Card>
      </div>
    );
  }
}

export default Organisers;
