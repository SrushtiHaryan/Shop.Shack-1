import React from 'react';
import ReactDOM from 'react-dom/client';
import './WomenCollection.css';
import Login from '../../components/login/Login';
import CollectionCard from '../../components/collection-card/Collection-card';



const Collection = function () {
    return (<div class="women-collection-container">
        <div class="WomenCollection-title">Women's Collection</div>

        <div class="women-collection-card-container">
            {/* <Login /> */}
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
        </div>
    </div>)
}

export default Collection;