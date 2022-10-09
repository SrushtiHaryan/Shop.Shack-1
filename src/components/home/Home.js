import React from 'react';
import ReactDOM from 'react-dom/client';
import './Home.css';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
// import {MdOutlineShoppingCart} from 'react-icons/md';
const Home = () => {
    return (
        <div class="homepage-page">
            <div class="homepage-onClickCategories">
                <img class="homepage-image-1-icon1" alt="" src="\assets\images\homepage-main.png" />
                <div class="homepage-ShopNow">
                    <button class="homepage-shopNowBtn" type="submit" id="shopNowText"><a href="categories.html">Shop Now</a></button>
                </div>
            </div>
            <div class="homepage-showCategories">
                <div class="homepage-Wear">
                    <img src="\assets\images\kidsCollection.png" class="kids" />
                    <p class="homepage-align-center"><a href="kidsCollection.html">KIDS WEAR</a></p>
                </div>
                <div class="homepage-Wear">
                    <img src="\assets\images\womenCollection.png" class="women" />
                    <p class="homepage-align-center"><a href="womensCollection.html">WOMEN'S WEAR</a></p>
                </div>
                <div class="homepage-Wear">
                    <img src="\assets\images\menCollection.png" class="men"  />
                    <p class="homepage-align-center"><a href="mensCollection.html">MEN'S WEAR</a></p>
                </div>
            </div>
        </div>
        
    )
}

export default Home;