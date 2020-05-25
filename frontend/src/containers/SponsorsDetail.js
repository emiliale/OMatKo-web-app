import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Button, Card } from "antd";
import Sponsors from "../components/Sponsors";

        
        
const env = process.env.NODE_ENV || "development";
const serverUrl =
    env === "development"
      ? "http://127.0.0.1:8000"
      : "https://omatko-app-backend.herokuapp.com";
        
class SponsorsList extends React.Component {
          state = {
            sponsors: []
          };
        
          fetchSponsors = () => {
            axios.get(`${serverUrl}/apiSponsor/`).then(res => {
              this.setState({
                sponsors: res.data
              });
            });
          }
        
          componentDidMount() {
            this.fetchSponsors();
          }
        
        
          render() {
            return (
              <div>
                <Sponsors data={this.state.sponsors} /> <br />
              </div>
            );
          }
        }
export default SponsorsList;