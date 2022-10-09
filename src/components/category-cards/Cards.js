import React from 'react';
// import ReactDOM from 'react-dom/client';
import './Cards.css';
import { HiShoppingBag, HiOutlineUserCircle } from 'react-icons/hi';
import { MdOutlineShoppingCart } from 'react-icons/md';

const cards = function () {
    return (<div>

        <div className="categories-container">
            <div className="category-title">Categories

            </div>
            <div className="categories">
                <div className="Card"><span id="card-1">Men</span><img src="assets\images\men.png"></img></div>
                <div className="Card"><span id="card-2">Kids</span><img src="assets\images\kids.png"></img></div>
                <div className="Card"><span id="card-3">Women</span><img src="assets\images\women.png"></img></div>

            </div>

        </div>
    </div>)
}

export default cards;
