import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import {Card } from "antd";

const env = process.env.NODE_ENV || "development";
const serverUrl =
    env === "development"
        ? "http://127.0.0.1:8000"
        : "https://omatko-app-backend.herokuapp.com";


class OrganiserDetail extends React.Component {
  state = {
    organizer: {}
  };

  componentDidMount() {
    const organizerID = this.props.match.params.organizerID;
    axios.get(`${serverUrl}/apiOrganizer/${organizerID}`).then(res => {
      this.setState({
        organizer: res.data
      });
    });
  }


  render() {
    return (
        <Card title={this.state.organizer.first_name +" "+this.state.organizer.surname}
        style={{ width: 300 }}
        cover={<img width={100}  alt={this.state.organizer.first_name} src={this.state.organizer.image} />}>
          <p> {"Telefon: "+this.state.organizer.phone} </p>
          <p>{"e-mail: "+this.state.organizer.email} </p>
          <p>{this.state.organizer.description} </p>
        </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(OrganiserDetail);
