import React, {useEffect} from 'react';
import {connect} from "react-redux";
import ModelReducer, {GetModel} from "../../store/ModelReducer";
import {useState} from "react";
import {Link, Route, Switch} from 'react-router-dom'
import './carModels.css'
import Elonlar from "../elonlar/Elonlar";

function CarModels({GetModel, ModelReducer}) {

    useEffect(() => {
        GetModel()
    }, [])

    return (
        <div className={'carModels'}>
            {
                console.log(ModelReducer.model)
            }
            <h3>Modellari</h3>

            <div className="carWrap">
                {
                    ModelReducer.model.map(item => <div key={item.id}>
                        <div><img src={item.imgUrl}/></div>

                        <Link to={'/models/elonlar/'+item._id}>
                            <div>{item.name}</div>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
}

export default connect((ModelReducer), {GetModel,})(CarModels)
