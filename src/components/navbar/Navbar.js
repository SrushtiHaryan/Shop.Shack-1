import React from 'react';
// import ReactDOM from 'react-dom/client';
import './Navbar.css';
import {HiShoppingBag, HiOutlineUserCircle} from 'react-icons/hi';
import {MdOutlineShoppingCart} from 'react-icons/md';


const navbar = function(){
    return(<div className="navbar">

    <div className="Brand">
      <div className="Brand-logo"><HiShoppingBag /></div>
      <div className="Brand-name">Shop.Shack</div>
    </div>
    <ul>
      <a>
        <li>Home</li>
      </a>
      <li><a>Shop</a></li>
      <li><a>About Us</a></li>
      <li><a>Contact Us</a></li>
    </ul>
    <div className="cart-profile">
      <MdOutlineShoppingCart />
      <HiOutlineUserCircle />
    </div>
  </div>);
}

export default navbar;