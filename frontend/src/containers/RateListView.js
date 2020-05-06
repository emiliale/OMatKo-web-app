import React from "react";
import axios from "axios";
import Rates from "../components/Rate";
import CustomForm from "../components/Form";


const env = process.env.NODE_ENV || "development";
const serverUrl =
    env === "development"
        ? "http://127.0.0.1:8000/"
        : "https://omatko-app-backend.herokuapp.com";

class RateList extends React.Component {
  state = {
    articles: []
  };

  fetchRates = () => {
    axios.get(`${serverUrl}/apiVote/`).then(res => {
      this.setState({
        rates: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchRates();
  }


  render() {
    return (
      <div>
        <Rates data={this.state.rates} /> <br />
      </div>
    );
  }
}

export default RateList;
