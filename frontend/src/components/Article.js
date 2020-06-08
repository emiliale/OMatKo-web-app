import React from "react";
import { List, Avatar, Icon } from "antd";

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
  );
};

export default Articles;
