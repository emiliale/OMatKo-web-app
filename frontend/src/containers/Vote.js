import React from 'react';
import { Form, Input, Icon, Button, Rate } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

const FormItem = Form.Item;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
          this.props.onAuth(
            values.code,
            values.rate_content,
            values.rate_presentation
        );
        this.props.history.push('/');
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }


  render() {

    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>

        <FormItem  label="Kod prelekcji" rules={[{ required: true }]}>
            {getFieldDecorator('code')(
                <Input placeholder="Kod wykładu"/>
            )}
        </FormItem>

        <FormItem  label="" rules={[{ required: true }]}>
            {getFieldDecorator('rate_content')(
              <Rate character={<HeartOutlined />} allowHalf/>
                )}
            <span className="rate_content">Ocena za merytorykę</span>
        </FormItem>

        <FormItem>
            {getFieldDecorator('rate_presentation')(
              <Rate character={<HeartOutlined />} allowHalf/>
                )}
                <span className="rate_presentation">Ocena za prezentację</span>
            </FormItem>
        <FormItem>
        <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
            Zmień hasło
        </Button>
        </FormItem>

      </Form>
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
        onAuth: (code, rate_content, rate_presentation, token) => dispatch(actions.authVote(code, rate_content, rate_presentation, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedRegistrationForm);
