import React, { useState, useEffect } from 'react';

const PostItem = () => {
    const [openAuctions, addNewAuction] = useState({});


    return (
        <>
        <h1>Post Item</h1>

        <div className="item-display">

        <div className="description-field">
            <p>Describe the item you are selling:</p>
            <input className="item-description" type="text"></input>
        </div>
        <div className="price-field">
            <p>What should be the starting bid for this item?</p>
            <input type="item-price"></input>
        </div>
        
        <div className="postType">
        <input type="checkbox" id="markAsSale" name="markAsSale" value="forSale"/>
        <label for="sale-item">I want to put this item up for sale.</label>
        <input type="checkbox" id="markAsAuction" name="markAsAuction" value="forAuction"/>
        <label for="sale-item">I want to put this item up for Auction.</label>
        </div>
        </div> 
        </>
    );
};

export default PostItem;