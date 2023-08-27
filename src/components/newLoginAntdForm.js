import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { protectedRoute } from '../redux/actions';
import { Link } from 'react-router-dom';

export const LoginForm2 = () => {

  const dispatch=useDispatch()
  const auth=useSelector((state)=>state.authenticate.auth)

const onFinish = (values) => {
  console.log('Success:', values); 
  if (values.username == 'vishal' && values.password == '123') {
    dispatch(protectedRoute(!auth))
    console.log(auth);
    localStorage.setItem('data', JSON.stringify(auth));
    const getData=localStorage.getItem('data')
    const getData2=JSON.parse(getData)
    console.log('values :',getData2);
  }
};

const loggingOut=()=>{
  console.log(auth);
  dispatch(protectedRoute(!auth))
  localStorage.setItem('data', JSON.stringify(auth));
const getData=localStorage.getItem('data')
const getData2=JSON.parse(getData)
console.log('values :',getData2);
}

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

  return(
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
      <Link to='/pro'><Button>To Main</Button></Link>
      <Button type='primary' onClick={loggingOut}>
        Logout
      </Button>
    </Form.Item>
  </Form>
  )
};
