import {configureStore} from "@reduxjs/toolkit";
import api from '../store/middleware/api'
import ModelReducer from "./ModelReducer";
import users from "./users";
import carReducer from "./CarReducer";
export default configureStore({
    reducer:{
        ModelReducer,
        users,carReducer
    },
    middleware:[
        api
    ]
})
