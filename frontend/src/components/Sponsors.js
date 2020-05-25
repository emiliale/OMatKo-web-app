import React from "react";
import axios from "axios";
import { Button, Card } from "antd";
import { List, Avatar, Icon, Typography } from "antd";
import { Row, Col } from 'antd';

const { Meta } = Card;

const { Title, Paragraph, Text } = Typography;

const Sponsors = props => {
  return (
    <Typography>
      <Title>Firmy wspierające naszą konferencję!</Title>
      <Paragraph>Bez was nie dalibyśmy rady...</Paragraph>
    <List
      dataSource={props.data}
      renderItem={item => (
        <Card
          key={item.sponsor_name}
        >
          <Meta
            title= {item.sponsor_name}
            avatar={<Avatar src={item.logo} />}
            description={item.description}
          />
          {item.content}
        </Card>
      )}
    />
    </Typography>
  )
};

export default Sponsors;
