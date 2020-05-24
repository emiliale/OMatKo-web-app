import React from "react";
import axios from "axios";
import Articles from "../components/Article";
import CustomForm from "../components/Form";

const env = process.env.NODE_ENV || "development";
const serverUrl =
    env === "development"
        ? "http://127.0.0.1:8000"
        : "https://omatko-app-backend.herokuapp.com";


class Organisers extends React.Component {
  state = {
    organiser: []
  };

  fetchSponsors = () => {
    axios.get(`${serverUrl}/api/organizer/`).then(res => {
      this.setState({
        organiser: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchOrganiser();
  }


  render() {
    return (
      <div>
        <Card title={this.state.organiser.surname}>
          <p> {this.state.organiser.first_name} </p>
        </Card>
      </div>
    );
  }
}

export default Organisers;
