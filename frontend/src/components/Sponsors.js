import React from "react";
import { Card } from "antd";
import { List, Avatar, Typography } from "antd";

const { Meta } = Card;
const { Title, Paragraph} = Typography;

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
            title={<a href={`/sponsors/${item.id}`}> {item.sponsor_name} </a>}
            avatar={<Avatar src={item.logo} />}
          />
          {item.content}
        </Card>
      )}
    />
    </Typography>
  )
};

export default Sponsors;
