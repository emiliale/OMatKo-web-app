import React from 'react';
import { Form, Input, Button, Rate } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import { Link } from 'react-router-dom';

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
      <div style={{ paddingRight: '10%', paddingLeft: '35%' }}>
      <Form onSubmit={this.handleSubmit}>

        <FormItem  style={{width:'52%'}} label="Kod prelekcji" rules={[{ required: true }]}>
            {getFieldDecorator('code')(
                <Input placeholder="Kod prelekcji"/>
            )}
        </FormItem>

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
        <Button type="primary" htmlType="submit">
            Zapisz
              </Button>
        <Button type="default"  htmlType="submit" style={{marginLeft: '2%'}}>
          <Link to="/rate">Wyświetl już oddane głosy</Link>
        </Button>
        </FormItem>

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
        onAuth: (code, rate_content, rate_presentation, token) => dispatch(actions.authVote(code, rate_content, rate_presentation, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedRegistrationForm);
