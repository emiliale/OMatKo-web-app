import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
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
            values.password,
            values.confirm,
            values.oldPassword
        );
        this.props.history.push('/');
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Hasła nie są ze sobą zgodne!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  validatePassword = (rule, value, callback) => {
    var passwordValidator = require('password-validator');
    var schema = new passwordValidator();
    schema
      .is().min(8)                                    // Minimum length 8
      .is().max(100)                                  // Maximum length 100
      .has().uppercase()                              // Must have uppercase letters
      .has().lowercase()                              // Must have lowercase letters
      .has().digits();
    if (value && (!(schema.validate(value)))) {
      callback("Hasło musi posiadać: min. 8 znaków oraz wielką literę, małą literę i liczbę!");
    } else {
      callback();
    }
  };


  render() {

    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>

        <FormItem>
            {getFieldDecorator('oldPassword', {
                rules: [{ required: true, message: 'Wprowadź aktualne hasło!' }],
            })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}type="password" placeholder="Aktualne hasło" />
            )}
        </FormItem>


        <FormItem>
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Wprowadź nowe hasło!',
            }, {
              validator: this.validateToNextPassword,
              validator:  this.validatePassword,
            }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Nowe hasło" />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Potwierdź hasło!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Powtórz nowe hasło" onBlur={this.handleConfirmBlur} />
          )}
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
        onAuth: (password1, password2, oldPassword, token) => dispatch(actions.authChangePassword(password1, password2, oldPassword, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedRegistrationForm);
