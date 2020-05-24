import React, { Component } from 'react';
import { Typography, Divider, Card } from 'antd';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

class Sponsors extends React.Component {
    render(){
        return(
        <Typography>
            <Title>Nasi partnerzy!</Title>
            <Paragraph>
                Bez was nie dalibyśmy rady...
            </Paragraph>
        
            <Title>Firmy współpracujące</Title>
            <Title>Patronaty honorowe</Title>
            <Title>Patronaty medialne</Title>
        </Typography>);
  }
}

export default Sponsors;