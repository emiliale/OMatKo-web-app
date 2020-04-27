import React, { Component } from 'react';
import { HeartOutlined } from '@ant-design/icons';
import { Form, Input, Icon, Button, Rate, } from 'antd';
import { Link } from 'react-router-dom';

const FormItem = Form.Item;

class Vote extends React.Component {
    render(){

        return(
            <Form>
                <FormItem name="code" label="Kod prelekcji" rules={[{ required: true }]}>
                <Input />
                </FormItem>

                <FormItem>
                    <Rate defaultValue={3}  character={<HeartOutlined />} allowHalf/>
                    <span className="rate-content">Ocena za merytorykę</span>
                <FormItem/>
                <FormItem>
                    <Rate defaultValue={3} character={<HeartOutlined />} allowHalf/>
                    <span className="rate-content">Ocena za prezentację</span>
                </FormItem>
                    <Button type="primary" htmlType="vote" style={{marginRight: '10px'}}>
                        Zapisz
                    </Button>
                  <Button type="default"  htmlType="vote" style={{marginTop: "4px", float: "right"}}>
                        <Link to="/rate">Wyświetl już oddane głosy</Link>
                  </Button>
                </FormItem>

            </Form>);
  }
}

export default Vote;
