import {createSlice} from "@reduxjs/toolkit";
import{apiCall} from "./api";

const slice1 = createSlice({
    name: 'cars',
    initialState:{
        cars:[]
    },
    reducers:{
        GetFrom: (state, action)=> {
            state.cars = action.payload.data.data
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

export const getCars=()=>apiCall({
    url:'/car?limit=5&page=1&categoryId=63180c53d0953487569045c7',
    method:'get',
    onSuccess:slice1.actions.GetFrom.type
})

export default slice1.reducer
