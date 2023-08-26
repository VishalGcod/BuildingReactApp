import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import Lense from "../icons/lense";
const items = [
  {
    label: (
     <Button on>Delete</Button>
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
export const DropdownBar = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);