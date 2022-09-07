import {connect} from "react-redux";
import {useEffect,useState} from "react";
import ModelReducer, {GetModel} from "../../store/ModelReducer";

function Models({model,GetModel}){


    return(
        <div className={'carModel'}>

        </div>
    )
}
export default connect((ModelReducer),{GetModel}) (Models)