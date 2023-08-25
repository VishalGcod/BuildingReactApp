import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { apiDatas } from '../redux/actions'
import { styled } from 'styled-components'

function MapDatas() {
    const dispatch=useDispatch()
    const arr=useSelector((state)=>state.arr)

    useEffect(()=>{
        dispatch(apiDatas())
    },[])
    // const[array,setArray]=useState([])

    // useEffect(()=>{
    //     axios.get("https://fakestoreapi.com/products").then((res)=>{setArray(res.data)
    //     console.log(res.data);
    // }).catch((err)=>{
    //         console.log('api:',err);
    //     })
    // },[])
    // console.log(array);
    console.log(arr);
  return (
    <div>
        {
           arr.map((e)=>(
            <h1>{e.title}</h1>
           )) 
        }
    </div>
  )
}

export default MapDatas