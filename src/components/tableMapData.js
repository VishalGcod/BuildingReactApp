import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteApi, editApi, fetching, postApi } from '../redux/actions';
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
  const array = useSelector((state) => state.api2.apiData);

  useEffect(() => {
    dispatch(fetching());
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    const deletedArray = [...array];
    deletedArray.splice(id, 1);
    dispatch(deleteApi(deletedArray));
  };

  const handleEdit = (record, recordIndex) => {
    console.log(record, recordIndex);
    const updatedData = [...array];
    updatedData[recordIndex] = {id:record.id,title:"bag",price:record.price};
    dispatch(editApi(updatedData));
  };
  const addRow=()=>{
    const obj={id:(array.length+1),title:'trouser',price:'30.5'}
    const addData = [...array,obj];
    dispatch(postApi(addData));
    console.log(obj);
    console.log(array.length+1);
  }

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
          <Button onClick={() => handleDelete(recordIndex)}>Delete</Button>
          <Button onClick={() => handleEdit(record, recordIndex)}>Edit</Button>
          <DropdownBar />
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
