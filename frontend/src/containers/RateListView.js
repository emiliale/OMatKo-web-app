import React from "react";
import axios from "axios";
import Rates from "../components/Rate";
import CustomForm from "../components/Form";


const env = process.env.NODE_ENV || "development";
const serverUrl =
    env === "development"
        ? "http://127.0.0.1:8000"
        : "https://omatko-app-backend.herokuapp.com";

class RateList extends React.Component {
  state = {
    votes: [],
    events: []
  };

  fetchRates = () => {

    const getVotes = axios.get(`${serverUrl}/apiVote/`)
    const getEvents = axios.get(`${serverUrl}/apiEvent/`)
    axios.all([getVotes, getEvents]).then(
      axios.spread((...responses) => {
        const allDataVote = responses[0]
        const allDataEvents = responses[1];

        this.setState({
          votes: allDataVote.data,
          events: allDataEvents.data
      })
      })
    )
  }

  componentDidMount() {
    this.fetchRates();    
  }


  render() {

    return (
      <div style={{ paddingRight: '30%', paddingLeft: '30%', paddingTop: '3%' }}>
        <Rates votes={this.state.votes} events={this.state.events} /> <br />
      </div>
    );
  }
}

export default RateList;
