import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Product from './components/product-page/Product';
import Cards from './components/category-cards/Cards';

import OrderSummary from './pages/order-summary/OrderSummary';

import AuthIn from './pages/AuthIn/AuthIn';
import Contact from './pages/ContactUs/ContactUs';
import Homepage from './pages/Homepage/HomePage';
import Collection from './pages/KidsCollection/KidsCollection';
import MenCollection from './pages/MenCollection/MenCollection';
import WomenCollection from './pages/WomenCollection/WomenCollection';
// import Categories from './pages/categories/Categories';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <Navbar></Navbar>
    <WomenCollection></WomenCollection>
    {/* <Contact></Contact> */}
     {/* <Categories></Categories> */}
    {/* <OrderSummary></OrderSummary> */}
    {/* <Product></Product> */}

  </div>

);

