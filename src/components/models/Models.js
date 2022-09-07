import {connect} from "react-redux";
import {useEffect,useState} from "react";
import ModelReducer, {GetModel} from "../../store/ModelReducer";
import {Route, Switch} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Asosiy from "../Asosiy/Asosiy";

function Models({model,GetModel}){

    return(
        <div className={'wrapper'}>
            <div><Sidebar/></div>
            <div>
                <Navbar/>
                <div className={'routes'}>
                    <Switch>
                        <Route path={'/'} element={<Asosiy/>}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}
export default connect((ModelReducer),{GetModel}) (Models)
