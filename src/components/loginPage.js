import React from 'react';
import CompOne from './compOne';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
  if (values.username == 'vishal' && values.password == '123') {
    alert('correct email and password');
    const obj = {
      username: 'vishal',
      password: '123',
    };
    localStorage.setItem('values', JSON.stringify(obj));
  } else {
    alert('wrong email or password');
  }
};
const values = localStorage.getItem('values');
const values1 = JSON.parse(values);
console.log(values1);
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
export function LoginForm() {
  return (
    <div>
      {values1 ? (
        <CompOne />
      ) : (
        <Form
          name='basic'
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            label='Username'
            name='username'
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name='remember'
            valuePropName='checked'
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
}
