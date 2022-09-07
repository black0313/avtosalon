import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

export const slice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        id:'',
        linkhome:true,
        linkheader:false,
        error:false,



    },
    reducers: {
        saveusers: (state, action) => {
                console.log(action.payload)
            if (action.payload.message=== 'Success'){
                state.linkhome=false
                state.linkheader=true
                localStorage.setItem('tokenname', action.payload.data.token)
            }
            else{
                state.error=true
            }

        },

    }
})
export const {saveusers} = slice.actions
export default slice.reducer
