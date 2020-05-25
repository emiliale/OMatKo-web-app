import React from "react";
import axios from "axios";
import { Button, Card } from "antd";
import { List, Avatar, Icon } from "antd";
import { Row, Col } from 'antd';
const { Meta } = Card;

const Sponsors = props => {
  return (
    <List
      dataSource={props.data}
      renderItem={item => (
        <Card
          key={item.sponsor_name}
        >
          <Meta
            title={<a href={`/sponsor/${item.id}`}> {item.sponsor_name} </a>}
            avatar={<Avatar src={item.logo} />}
            description={item.description}
          />
          {item.content}
        </Card>
      )}
    />
  );
};

export default Sponsors;
