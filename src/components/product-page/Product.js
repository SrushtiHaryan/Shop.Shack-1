import React from 'react';
// import ReactDOM from 'react-dom/client';
import './Product.css';
import { HiShoppingBag, HiOutlineUserCircle } from 'react-icons/hi';
import { MdOutlineShoppingCart } from 'react-icons/md';

const productPage = function () {

  return (<div class="product-page-container">
    <div class="product-container">


      <img src="assets\images\whiteshirt.png" alt="" />
    </div>
    <div class="product-details-container">
      <div class="product-details-container-content">

        <div class="name-price">
          <div class="product-name">Solid white shirt</div>
          <div class="product-price">₹ 999</div>
        </div>

        <div class="product-desc">
          <div class="product-detail-title">Product Description</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat</p>
        </div>

        <div class="customer-choice">
          <div class="product-quantity">
            <div class="product-detail-title product-detail-quantity">Quantity</div>
            <div class="product-quantity-box">
              <span class="subtract">-</span><input type="text" placeholder="1" /><span class="add">+</span>
            </div>
          </div>
          <div class="product-detail-title  ">Size
          <div class="product-detail-size">
            <div class="circle-size" id="S">
              <p>S</p>
            </div>
            <div class="circle-size" id="M">
              <p>M</p>
            </div>
            <div class="circle-size" id="L">
              <p>L</p>
            </div>
            <div class="circle-size" id="XL">
              <p>XL</p>
            </div>
            </div>
          </div>
        </div>
        <div class="product-buttons">
          <div class="add-to-cart"><span><i class="fa-sharp fa-solid fa-cart-plus"></i></span> Add to Cart</div>
          <div class="ptp">
            <a href="desktop-4.html" target="_blank" class=""><div class="proceed-to-purchase">Proceed to Purchase </div></a>
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>



  </div>);

}

export default productPage;