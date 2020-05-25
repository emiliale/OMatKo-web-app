import React from "react";
import axios from "axios";
import { Button, Card } from "antd";
import { List, Avatar, Icon } from "antd";
import { Row, Col } from 'antd';
const { Meta } = Card;

const Organisers = props => {
  return (
    <List
      dataSource={props.data}
      renderItem={item => (
        <Card
          key={item.surname}
        >
          <Meta
            title={item.surname + " " + item.first_name}
            avatar={<Avatar src={item.first_name} />}
            description={item.description}
          />
          {item.content}
        </Card>
      )}
    />
  );
};

export default Organisers;
