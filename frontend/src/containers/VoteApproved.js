import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

class VoteApproved extends React.Component {


    componentDidMount() {
        setTimeout(() => {
            window.location.replace('/')}, 5000)
    }

    render(){
        return(
                <Typography style={{ paddingRight: '30%', paddingLeft: '35%', paddingTop: '3%' }}>
                    <Title>Głos poprawnie oddany!</Title>
                </Typography>
        )};
}

export default VoteApproved;
