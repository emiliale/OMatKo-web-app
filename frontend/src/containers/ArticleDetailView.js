import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Button, Card } from "antd";
import CustomForm from "../components/Form";

const env = process.env.NODE_ENV || "development";
const serverUrl =
    env === "development"
        ? "http://127.0.0.1:8000/"
        : "https://omatko-app-backend.herokuapp.com";


class ArticleDetail extends React.Component {
  state = {
    article: {}
  };

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`${serverUrl}/api/${articleID}`).then(res => {
      this.setState({
        article: res.data
      });
    });
  }


  render() {
    return (
        <Card title={this.state.article.title}>
          <p> {this.state.article.content} </p>
        </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(ArticleDetail);
