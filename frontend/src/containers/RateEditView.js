import React from 'react';
import axios from "axios";
import { Form, Button, Rate, Card } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

const FormItem = Form.Item;


const env = process.env.NODE_ENV || "development";
const serverUrl =
    env === "development"
        ? "http://127.0.0.1:8000"
        : "https://omatko-app-backend.herokuapp.com";

class RegistrationForm extends React.Component {
  state = {
    vote: {}
  };

  componentDidMount() {
    const voteID = this.props.match.params.voteID;
    axios.get(`${serverUrl}/apiVote/${voteID}`).then(res => {
      this.setState({
        vote: res.data
      });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
          this.props.onAuth(
            this.state.vote.lecture,
            values.rate_content.toString(),
            values.rate_presentation.toString(),
            this.props.match.params.voteID
        );
        this.props.history.push('/');
      }
    });
  }

  render() {

    const { getFieldDecorator } = this.props.form;

    return (
      <div style={{ paddingRight: '30%', paddingLeft: '30%', paddingTop: '3%' }}>
      <Form onSubmit={this.handleSubmit}>

      <Card title={`Kod prelekcji: ${this.state.vote.lecture}`}>

        <FormItem  label="" rules={[{ required: true }]}>
            {getFieldDecorator('rate_content')(
              <Rate character={<HeartOutlined />}/>
                )}
            <span className="rate_content">Ocena za merytorykę</span>
        </FormItem>

        <FormItem>
            {getFieldDecorator('rate_presentation')(
              <Rate character={<HeartOutlined />}/>
                )}
                <span className="rate_presentation">Ocena za prezentację</span>
            </FormItem>
        <FormItem>
        <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
            Zapisz
              </Button>
          </FormItem>
          </Card>

      </Form>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (code, rate_content, rate_presentation, id, token) => dispatch(actions.authVoteUpdate(code, rate_content, rate_presentation, id, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedRegistrationForm);
