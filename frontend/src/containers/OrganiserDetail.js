import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import {Card, Typography } from "antd";

const { Title, Paragraph} = Typography;
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
      <Typography style={{ paddingRight: '20%', paddingLeft: '20%'}}>
      <div style={{ paddingRight: '40%', paddingLeft: '40%'}}>
        <Card title={this.state.organizer.first_name +" "+this.state.organizer.surname}
        style={{ width: 300 }}
        cover={<img width={100}  alt={this.state.organizer.first_name} src={this.state.organizer.image} />}>
        </Card>
        </div>
        <Paragraph>
        <p>{this.state.organizer.description} </p>
        </Paragraph>
        <Title style={{ paddingRight: '5%', paddingLeft: '5%'}}>Masz do mnie jakieś pytania?</Title>
        <p> {"Telefon: "+this.state.organizer.phone} </p>
        <p>{"e-mail: "+this.state.organizer.email} </p>
        </Typography>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(OrganiserDetail);
