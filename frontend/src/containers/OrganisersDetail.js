import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Button, Card } from "antd";
import Organisers from "./Organisers";

const env = process.env.NODE_ENV || "development";
const serverUrl =
    env === "development"
        ? "http://127.0.0.1:8000"
        : "https://omatko-app-backend.herokuapp.com";


class OrganisersDetail extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          organizers: []
    }

}

  componentDidMount() {
    const sponsorID = this.props.match.params.sponsorID;
    axios.get(`${serverUrl}/apiOrganizer/${id}`).then(res => {
      this.setState({
        organizers: res.data
      });
    });
  }

  render() {
    return (
        <Card title={this.state.organizer.surname}>
          <p> {this.state.organizer.first_name} </p>
        </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(OrganisersDetail);