import {Switch,Route,Redirect} from "react-router-dom";
import './App.css';
import {connect} from "react-redux";
import Models from "./components/models/Models";
import Login from "./components/LoginPage/Login";
import users from "./store/users";
import carModelTypes from "./components/carModelTypes/CarModelTypes";
import ModelReducer, {GetFromCarTypes} from "./store/ModelReducer";
import {useEffect} from "react";

function App({users,GetFromCarTypes,ModelReducer}) {

    useEffect(()=>{
        GetFromCarTypes()
    },[])
    return (
        <div>
            {/*998993466780*/}
            <Switch>
                {
                    users.linkhome ?
                        <Route path={'/login'} component={Login}/>
                        : ''
                }
                {
                    users.linkheader ? <Route path={'/models'} component={Models}/> : ''

                }
                {
                    users.linkhome ? <Redirect to={'/login'}/> : ''
                }

                {
                    users.linkheader ? <Redirect to={'/models'}/> : ''
                }

            </Switch>

        </div>
    );
}

export default connect((users,ModelReducer),{GetFromCarTypes}) (App);
