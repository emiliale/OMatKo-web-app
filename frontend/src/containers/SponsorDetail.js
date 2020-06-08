import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Card } from "antd";

const env = process.env.NODE_ENV || "development";
const serverUrl =
    env === "development"
        ? "http://127.0.0.1:8000"
        : "https://omatko-app-backend.herokuapp.com";


class SponsorDetail extends React.Component {
  state = {
    sponsor: {}
  };

  componentDidMount() {
    const sponsorID = this.props.match.params.sponsorID;
    axios.get(`${serverUrl}/apiSponsor/${sponsorID}`).then(res => {
      this.setState({
        sponsor: res.data
      });
    });
  }


  render() {
    return (
        <Card title={this.state.sponsor.sponsor_name}
        style={{ width: 300 }}
        cover={<img width={100} alt={this.state.sponsor.sponsor_name} src={this.state.sponsor.logo} />}>
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

export default connect(mapStateToProps)(SponsorDetail);
