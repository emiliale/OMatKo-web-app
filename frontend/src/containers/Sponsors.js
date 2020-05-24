import React from "react";
import axios from "axios";
import Articles from "../components/Article";
import CustomForm from "../components/Form";

const env = process.env.NODE_ENV || "development";
const serverUrl =
    env === "development"
        ? "http://127.0.0.1:8000"
        : "https://omatko-app-backend.herokuapp.com";


class Sponsors extends React.Component {
  state = {
    sponsorss: []
  };

  fetchSponsors = () => {
    axios.get(`${serverUrl}/apiSponsor/`).then(res => {
      this.setState({
        sponsors: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchSponsors();
  }


  render() {
    return (
      <div>
        <Sponsors data={this.state.Sponsors} /> <br />
      </div>
    );
  }
}

export default Sponsors;
