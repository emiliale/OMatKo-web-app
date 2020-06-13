import React from "react";
import { List, Avatar, Icon, Statistic, Typography, Title} from "antd";

const { Title } = Typography;
const { Countdown } = Statistic;
const deadline_start = Date.now() + 2000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
const deadline_zapisy = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

function onFinish() {
  console.log('Czas minął!');
}

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

const Articles = props => {
  return (
    <Typography>
      <Title>Odliczanie</Title>
      <Countdown title="Do konferencji pozostało:" value={deadline_start} format="D Dni H Godzin m Minut s Sekund" />
      <Countdown title="Do końca zapisów pozostało:" value={deadline_zapisy} format="D Dni H Godzin m Minut s Sekund" />
      <Title>Aktualne informacje:</Title>
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3
      }}
      dataSource={props.data}
      renderItem={item => (
        <List.Item
          key={item.title}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://pwr.edu.pl/fcp/4GBUKOQtTKlQhbx08SlkTUhZeUTgtCgg9ACFDC0RFTm9PFRYqCl5tDXdAGHoV/1/public/news_team/rozne/konferencja_matematyczna_omatko.jpg"
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/1916339_681763608632703_7122335183158288377_n.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=d43e1fh8BVoAX-lwPLZ&_nc_ht=scontent-frt3-1.xx&oh=11e4b7ca4914c2fe2c992b32ee5e3b14&oe=5F03C753" />}
            title={<a href={`/articles/${item.id}`}> {item.title} </a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
    </Typography>
  );
};

export default Articles;
