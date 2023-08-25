import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetching } from '../redux/actions'
import { Table } from 'antd';

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }
  };

 function MapTableDatas() {
    const dispatch=useDispatch()
    const array=useSelector((state)=>state.api2.apiData)

    useEffect(()=>{
       dispatch(fetching())
    },[])


    const columns = [
        {
          title: 'id',
          dataIndex: 'id',
          render: (text) => <a>{text}</a>,
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
            button:'Buttons',
            
        }
      ];


  return (
    <div>
      <Table
        rowSelection={{
          ...rowSelection,
        }}
        columns={columns}
        dataSource={array}
      />
    </div>
  )
}

  export default MapTableDatas