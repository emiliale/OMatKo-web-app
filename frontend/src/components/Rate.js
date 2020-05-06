import React from "react";
import { List, Avatar, Icon, Button } from "antd";

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
          avatar={
            <div>
            <Button><Icon type="edit" style={{ color: 'rgba(0,0,0,F)' }} /></Button>
            <Button><Icon type="delete" style={{ color: 'rgba(0,0,0,F)' }} /></Button>
            </div>
          }
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
