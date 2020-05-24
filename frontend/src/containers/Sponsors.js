import React from "react";
import axios from "axios";
import Articles from "../components/Article";
import CustomForm from "../components/Form";
import Card from "antd"

const env = process.env.NODE_ENV || "development";
const serverUrl =
    env === "development"
        ? "http://127.0.0.1:8000"
        : "https://omatko-app-backend.herokuapp.com";


class Sponsors extends React.Component {
  state = {
    sponsor: []
  };

  fetchSponsors = () => {
    axios.get(`${serverUrl}/apiSponsor/`).then(res => {
      this.setState({
        sponsor: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchSponsor();
  }


  render() {
    return (
      <div>
        <Card title={this.state.sponsor.sponsor_name}>
          <p> {this.state.sponsor.description} </p>
        </Card>
      </div>
    );
  }
}

export default Sponsors;
