import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Button, Card } from "antd";
import CustomForm from "../components/Form";
import { UserOutlined, CalendarOutlined, KeyOutlined} from '@ant-design/icons';

const env = process.env.NODE_ENV || "development";
const serverUrl =
    env === "development"
        ? "http://127.0.0.1:8000"
        : "https://omatko-app-backend.herokuapp.com";

const {Meta} = Card;

class EventDetail extends React.Component {
  state = {
    event: {}
  };

  componentDidMount() {
    const eventID = this.props.match.params.eventID;
    axios.get(`${serverUrl}/apiEvent/${eventID}`).then(res => {
      this.setState({
        event: res.data
      });
    });
  }

  
  
  render() {
    console.log(typeof this.state.event.end_date)
    function 
    getFormattedDate(date) {
      if(!date){
        return ""
      }
      return date.slice(0, date.length-1).replace("T", " ");
    }
  
    return (
        <Card title={this.state.event.title}>
            <Meta 
            title={<p><UserOutlined />    {this.state.event.presenter}</p>}
            description={<p><CalendarOutlined />  {getFormattedDate(this.state.event.start_date)}<br />
            <CalendarOutlined />  {getFormattedDate(this.state.event.end_date)} </p>} 
            />
            {this.state.event.description}
         
        </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(EventDetail);
