import React from 'react';
import ReactDOM from 'react-dom/client';
import './Login.css';
import {HiShoppingBag, HiOutlineUserCircle} from 'react-icons/hi';
// import {MdOutlineShoppingCart} from 'react-icons/md';


const login = function(){
    return(<div class="login-lr-cont">

    <div class="login-left-cont">
  
      <img class="login-lo_back" src="\assets\images\login_back.png" alt="" />

    </div>

    <div class="login-right-cont">
    

      <div class="login-heading">
        <HiShoppingBag />
        <div class="login-shopshack-text">Shop.Shack</div>
      </div>

      <div class="login-outline">

        <div class="login-e-mail-div">
          <div class="login-email-txt">E-mail</div>
          <input class="login-email-input" type="email" />
        </div>

        <div class="login-password-div">
          <div class="login-password-txt">Password</div>
          <input type="password" class="login-password-input"/>
        </div>
        <div class="login-logreg">
          <div class="login-btn">Login</div>

          <div class="login-reg-btn">Register</div>

        </div>
        <div class="login-Glogin">
          
          <div class="login-g">
            <img class="login-GIcon" src="\assets\images\GIcon.png" alt="" />
            Continue with google
          </div>

        </div>



      </div>

    </div>
  </div>);
}

export default login;