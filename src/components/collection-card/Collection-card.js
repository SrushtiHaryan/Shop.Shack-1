import React from 'react';
import ReactDOM from 'react-dom/client';
import './Collection-card.css';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
// import {MdOutlineShoppingCart} from 'react-icons/md';


const collectionCard = function () {
  return (

      <div class="collection-card">
        <img src="assets\images\kidsCollection-1.png" class="collection-cardimage" />
        <div class="collection-card-desc">
        <div class="collection-card-brand">M&S COLLECTION</div>
        <div class="collection-card-cloth-name">Denim Shirt</div>
        <div class="collection-card-price">₹2,999.00</div>
        </div>
      </div>

);
}

export default collectionCard;