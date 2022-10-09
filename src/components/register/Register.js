import React from 'react';
// import ReactDOM from 'react-dom/client';
import './Register.css';
import {HiShoppingBag, HiOutlineUserCircle} from 'react-icons/hi';
// import {MdOutlineShoppingCart} from 'react-icons/md';


const register = function(){
    return(<div class="register-lr-cont">

    <div class="register-left-cont">
      
        <div class="register-heading">
        <HiShoppingBag />
            <div class="register-shopshack-text">Shop.Shack</div>
          </div>
    
          <div class="register-outline">
    
            <div class="register-e-mail-div">
              <div class="register-name-txt">Name</div>
              <input class="register-name-input" />
              <div class="register-email-txt">E-mail</div>
              <input class="register-email-input" type="email"/>
            </div>
    
            <div class="register-password-div">
              <div class="register-password-txt" >Password</div>
              <input type="password" class="register-password-input" />
              <div class="register-password-conf">Confirm Password</div>
              <input type="password" class="register-conf-password-input" />
            </div>
            
            <div class="register-Glogin">
              
              <div class="register-reg">
                Register
              </div>
    
            </div>
    
    
    
          </div>

    </div>

    <div class="register-right-cont">
       
        <img class="register-lo_back" src="\assets\images\login_back.png" alt="" />



    </div>
</div>);
}

export default register;