import {configureStore} from "@reduxjs/toolkit";
import api from '../store/middleware/api'
import ModelReducer from "./ModelReducer";
import users from "./users";
export default configureStore({
    reducer:{
        ModelReducer,
        users
    },
    middleware:[
        api
    ]
})