import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Card, Typography } from "antd";

const { Title, Paragraph} = Typography;
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
      <Typography style={{ paddingRight: '20%', paddingLeft: '20%'}}>
      <div style={{ paddingRight: '40%', paddingLeft: '40%'}}>
        <Card title={this.state.sponsor.sponsor_name}
        style={{ width: 300 }}
        cover={<img width={100} alt={this.state.sponsor.sponsor_name} src={this.state.sponsor.logo} />}>
        </Card>
        </div>
        <Title>Czego możesz dowiedzieć się o naszym partnerze?</Title>
        <Paragraph>
        <p>{this.state.sponsor.description} </p>
        </Paragraph>
        </Typography>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(SponsorDetail);
