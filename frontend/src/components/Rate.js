import React from "react";
import { List, Avatar, Icon } from "antd";
import jwt from "jsonwebtoken";

const IconText = ({ type, text }) => (
  <span>
    <Icon
      type={type}
      style={{
        marginRight: 8
      }}
    />
    {text}
  </span>
);

const Rates = props => {

const username = localStorage.getItem('username');

const filterData = () => {
    if(props.data){
      var filtered = props.data.filter(vote => vote.userName == username);
      return filtered;
    }
    return [];
  }

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3
      }}
      dataSource={filterData()}
      renderItem={item => (
        <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://st2.depositphotos.com/8430356/11389/v/950/depositphotos_113897828-stock-illustration-heart-icon-isolated-on-white.jpg" />}
          title={<a href="https://ant.design"><p>Kod: {item.lecture}</p></a>}
          description={<ul><li>Ocena merytoryczna: {item.content_vote}</li>
                        <li>Ocena sposoby prezentacji: {item.presentation_vote}</li></ul>}
        />
      </List.Item>
      )}
    />
  );
};



export default Rates;
