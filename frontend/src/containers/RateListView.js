import React from "react";
import axios from "axios";
import Rates from "../components/Rate";
import CustomForm from "../components/Form";


class RateList extends React.Component {
  state = {
    articles: []
  };

  fetchRates = () => {
    axios.get("http://127.0.0.1:8000/apiVote/").then(res => {
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
