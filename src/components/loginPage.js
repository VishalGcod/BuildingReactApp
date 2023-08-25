import React from 'react';
import CompOne from './compOne';
import {
  Button, Checkbox, Form, Input,
} from 'antd';

const getVal = localStorage.getItem('username');
const getPass = localStorage.getItem('password');

const onFinish = (values) => {
  console.log('Success:', values);
  if (values.username == 'vishal' && values.password == '123') {
    alert('correct email and password');
    localStorage.setItem('username', 'vishal');
    localStorage.setItem('password', '123');
  } else {
    alert('wrong email or password');
  }
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
export function LoginForm() {
  return (
    <div>
    {
        getVal&&getPass ? <CompOne/> :
    <Form
      name="basic"
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
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
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
        label="Password"
        name="password"
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
        name="remember"
        valuePropName="checked"
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    }
    </div>
  );
}
