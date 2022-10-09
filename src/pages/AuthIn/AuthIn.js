import React from 'react';
import ReactDOM from 'react-dom/client';
import './AuthIn.css';
import Login from '../../components/login/Login';
import Register from '../../components/register/Register';



const AuthIn = function () {
    return (<div>

        {/* <Login /> */}
        <Register />
    </div>)
}

export default AuthIn;