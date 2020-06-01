import React from "react";
import { Button, Card } from "antd";
import { List, Avatar, Icon, Typography } from "antd";

const { Meta } = Card;
const { Title, Paragraph, Text } = Typography;

const Organisers = props => {
  return (
    <Typography>
      <Title>Nad konferencją czuwają...</Title>
      <Paragraph>...dzielni organizatorzy:</Paragraph>
    <List
      dataSource={props.data}
      renderItem={item => (
        <Card
          key={item.surname}
        >
          <Meta
            title={<a href={`/organisers/${item.id}`}> {item.surname + " " + item.first_name} </a>}
            avatar={<Avatar src={item.first_name} />}
            description={item.description}
          />
          {item.content}
        </Card>
      )}
    />
    </Typography>
  );
};

export default Organisers;
