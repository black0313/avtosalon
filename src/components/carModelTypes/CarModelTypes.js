import React from 'react';
import './carModelTypes.css'
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import ModelReducer, {GetFromCarTypes, GetModel} from "../../store/ModelReducer";
import {useEffect} from "react";

function CarModelTypes({GetModel,ModelReducer,GetFromCarTypes}) {

    useEffect(()=>{
        GetFromCarTypes()
    },[])

    return (
        <div className={'carTypes'}>
            <h2>Modellar turlari</h2>
            {
                console.log(ModelReducer.types)
            }
            <div className="carTypes">
                {
                    ModelReducer.types.map(item=><div key={item.id}>
                        <div>{item.imgUrl}</div>
                        <div>{item.price}</div>
                    </div>)
                }
            </div>
        </div>
    );
}

export default connect((ModelReducer), {GetModel,GetFromCarTypes}) (CarModelTypes);