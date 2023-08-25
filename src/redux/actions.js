export const ADD_DATA='ADD_DATA'
import axios from "axios" 

export const appendData=(data)=>{
    return{
    type:ADD_DATA,
    payload:data
    }
}

export const apiDatas=()=>{
    return( async(dispatch)=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{dispatch(appendData(res.data))
        console.log(res.data);
    }).catch((err)=>{
            console.log('api:',err);
        })
    })
} 