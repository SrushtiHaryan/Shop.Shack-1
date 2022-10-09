import React from 'react';
import ReactDOM from 'react-dom/client';
import './HomePage.css';
import Login from '../../components/login/Login';
import Home from '../../components/home/Home';



const Homepage = function () {
    return (<div>

        {/* <Login /> */}
        <Home />
    </div>)
}

export default Homepage;