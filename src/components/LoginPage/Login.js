import React from 'react';
import './login.css'
import {useState} from "react";
import {connect} from "react-redux";
import axios from "axios";
import users ,{saveusers}from "../../store/users";

function Login({users,saveusers}) {

    const [inputlogin, setLogin] = useState('')
    const [inputparol, setparol] = useState('')

    function login(event) {
        setLogin(event.target.value)
    }

    function parol(event) {
        setparol(event.target.value)
    }

    function testusers() {
        axios({
            method:'post',
            url:'https://cartestwebapp.herokuapp.com/employee/login',
            data:{
                phoneNumber:inputlogin,
                password:inputparol
            }
        }).then(function (res){
            saveusers(res.data)
        }).catch(function (err){
            saveusers({...err})
        })
    }

    return (
        <div className="home-enter">

            <div className="kirish-text">
                <h2>Kirish</h2>
            </div>
            <div className={`kirish-input`}>
                <input type="text" value={inputlogin} onChange={login} className={'login'}/>
                <div className={'input'}>
                    <input value={inputparol} onChange={parol} className={'pasword'}
                    />
                    <img src={require('../../img/eye-slash.png')} alt=""/>
                </div>
                {
                    users.error ? <span className={'error'}>Login yoki parol xato !</span>:''
                }
                <button onClick={testusers} className={'button'}>Kirish</button>
            </div>
        </div>
    );
}

export default connect((users),{saveusers}) (Login);