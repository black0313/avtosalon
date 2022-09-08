import {connect} from "react-redux";
import {useEffect,useState} from "react";
import ModelReducer, {GetModel} from "../../store/ModelReducer";
import {Route, Switch} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Asosiy from "../Asosiy/Asosiy";
import Elonlar from "../elonlar/Elonlar";
import CarModels from "../carModels/CarModels";
import carModelTypes from "../carModelTypes/CarModelTypes";

function Models({model,ModelReducer,GetModel}){

    return(
        <div className={'wrapper'}>
            <div><Sidebar/></div>
            <div>
                <Navbar/>
                <div className={'routes'}>
                    <Switch>
                        <Route path={'/models/asosiy'} component={Asosiy}/>
                        <Route path={'/models/elonlar'} component={CarModels}/>
                        {
                            ModelReducer.model.map(item=> <Route path={'/models/elonlar/'+item._id} component={carModelTypes}/>)
                        }
                        {/*<Route path={'/models/elonlar/63180c53d0953487569045c7'} component={Elonlar}/>*/}
                    </Switch>
                </div>
            </div>
        </div>
    )
}
export default connect((ModelReducer),{GetModel}) (Models)
