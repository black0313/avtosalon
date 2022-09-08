import {createSlice} from "@reduxjs/toolkit";
import{apiCall} from "./api";

const slice1 = createSlice({
    name: 'model',
    initialState:{
        model:[],
        types:[]
    },
    reducers:{
        GetFrom: (state, action)=> {
            state.model = action.payload.data.data
            console.log(state.model)
        },
        GetFromCarTypes: (state, action)=> {
            state.types = action.payload.data.data
            console.log(state.types)
        },
        SaveFrom: (state,action)=>{
            state.model.unshift(action.payload)
        },
        EditFrom: (state, action) => {
            state.model.map(item => {
                if (item.id === action.payload.id) {
                    item.name = action.payload.name
                    // item.body = action.payload.body
                    // item.email = action.payload.email
                }
            })
        },
    }
})

export const GetModel=(data)=>apiCall({
    url:'/category/marka?limit=5&page=1',
    method:'get',
    onSuccess:slice1.actions.GetFrom.type
})

export const GetFromCarTypes=(data)=>apiCall({
    url: '/car/'+data,
    method: 'get',
    onsuccess: slice1.actions.GetFromCarTypes.type
})

export default slice1.reducer