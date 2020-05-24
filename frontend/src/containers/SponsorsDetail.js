import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Button, Card } from "antd";
import CustomForm from "../components/Form";

const env = process.env.NODE_ENV || "development";
const serverUrl =
    env === "development"
        ? "http://127.0.0.1:8000"
        : "https://omatko-app-backend.herokuapp.com";


class SponsorsDetail extends React.Component {
  state = {
    sponsor: {}
  };

  componentDidMount() {
    const sponsorID = this.props.match.params.sponsorID;
    axios.get(`${serverUrl}/apiSponsor/${id}`).then(res => {
      this.setState({
        sponsors: res.data
      });
    });
  }

  render() {
    return (
        <Card title={this.state.sponsor.sponsor_name}>
          <p> {this.state.sponsor.description} </p>
        </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(SponsorsDetail);