import React, { Component } from 'react';
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

class Main extends React.Component {
    render(){
        return(
        <Typography>
            <Title>OMatKo!!! 2020</Title>
            <Paragraph>
            Ogólnopolska Matematyczna Konferencja Studentów "OMatKo!!!" powstała z inicjatywy studentów matematyki Politechniki Wrocławskiej
            zrzeszonych w czterech kołach naukowych i przeznaczona jest dla studentów matematyki i kierunków pokrewnych z całego kraju.
            </Paragraph>
        
        <Title>Dlaczego warto być z nami?</Title>
            <Paragraph>
            Celem konferencji jest rozwój naukowy uczestników poprzez możliwość prezentacji interesujących zagadnień,
            wyników pierwszych badań czy dzielenie się pasją z innymi studentami. Tegoroczna edycja "OMatKo!!!"
            z pewnością będzie źródłem wielu inspiracji oraz przestrzenią do zawiązywania nowych kontaktów między ambitnymi młodymi ludźmi z różnych uczelni >>
            <Title>Serdecznie zapraszamy!</Title>
            </Paragraph>
            <img
            width={700}
            alt="logo"
            src="https://pwr.edu.pl/fcp/4GBUKOQtTKlQhbx08SlkTUhZeUTgtCgg9ACFDC0RFTm9PFRYqCl5tDXdAGHoV/1/public/news_team/rozne/konferencja_matematyczna_omatko.jpg"
          />
        </Typography>);
  }
}

export default Main;
