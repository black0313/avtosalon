import {Switch,Route,Redirect} from "react-router-dom";
import './App.css';
import {connect} from "react-redux";
import Models from "./components/models/Models";
import Login from "./components/LoginPage/Login";
import users from "./store/users";

function App({users}) {
    return (
        <div>
            {console.log(users.linkhome)}
            {console.log(users.linkheader)}
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

export default connect((users)) (App);
