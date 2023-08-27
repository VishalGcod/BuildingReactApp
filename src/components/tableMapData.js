import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteApi, editApi, fetching, postApi, delUsers, postUsers, updateUsers } from '../redux/actions';
import { Table, Button } from 'antd';
import { styled } from 'styled-components';
import { DropdownBar } from './dropdownComp';

export const IdFont = styled.div`
  font-size: 30px;
`;

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

function MapTableDatas() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authenticate.auth);
  const array = useSelector((state) => state.api2.apiData);

  useEffect(() => {
    dispatch(fetching());
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    // const deletedArray = [...array];
    // deletedArray.splice(id, 1);
    dispatch(delUsers(id));
    // dispatch(protectedRoute(!auth))
  };

  const handleEdit = (record, recordIndex) => {
    console.log(record, recordIndex);
    const updatedData = [...array];
    updatedData[recordIndex] = { id: record?.id, title: 'bag', price: record.price };
    dispatch(updateUsers(recordIndex,updatedData));
    // dispatch(protectedRoute(!auth))
  };
  const addRow = () => {
    const obj = { id: array?.length + 1, title: 'trouser', price: '30.5' };
    const addData = [...array, obj];
    dispatch(postUsers(addData));
    console.log(obj);
    console.log(array?.length + 1);
  };

  const columns = [
    {
      title: <IdFont>id</IdFont>,
      dataIndex: 'id',
      render: (id) => <IdFont>{id}</IdFont>,
      sorter: {},
    },
    {
      title: 'title',
      dataIndex: 'title',
    },
    {
      title: 'price',
      dataIndex: 'price',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (_, record, recordIndex) => (
        <span>
           {/* { auth? */}
           <div>
              <Button onClick={() => handleDelete(recordIndex)}>Delete</Button>
              <Button onClick={() => handleEdit(record, recordIndex)}>Edit</Button>
            </div>
            {/* // : <DropdownBar/> */}
        </span>
      ),
    },
  ];

  return (
    <div>
      <Button onClick={addRow}>ADD NEW ROW</Button>
      <Table
        rowSelection={{
          ...rowSelection,
        }}
        columns={columns}
        dataSource={array}
      />
    </div>
  );
}

export default MapTableDatas;
