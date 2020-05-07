import React from "react";
import axios from "axios";
import Articles from "../components/Article";
import CustomForm from "../components/Form";

const env = process.env.NODE_ENV || "development";
const serverUrl =
    env === "development"
        ? "http://127.0.0.1:8000"
        : "https://omatko-app-backend.herokuapp.com";


class ArticleList extends React.Component {
  state = {
    articles: []
  };

  fetchArticles = () => {
    axios.get(`${serverUrl}/api/`).then(res => {
      this.setState({
        articles: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchArticles();
  }


  render() {
    return (
      <div>
        <Articles data={this.state.articles} /> <br />
      </div>
    );
  }
}

export default ArticleList;
