import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Lense from "../icons/lense";
import { protectedRoute } from '../redux/actions';
const items = [
  {
    label: (
     <Button >Delete</Button>
    ),
    key: '0',
  },
  {
    label: (
        <Button>Edit</Button>
    ),
    key: '1',
  },
  {
    label: (
        <Button><div style={{width:'150px'}}><Lense/> </div></Button>
    ),
    key: '3',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item（disabled）',
    key: '4',
    disabled: true,
  },
];
export const DropdownBar = () => {

  const dispatch=useDispatch()
  const auth=useSelector((state)=>state.authenticate.auth)

  const clickDropdown=(e)=>{
    e.preventDefault()
    dispatch(protectedRoute(!auth))
  }
  
  return(
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={clickDropdown}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
)}