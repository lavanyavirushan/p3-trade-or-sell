import React, { useState, useEffect } from 'react';

const ViewItem = () => {
    const [openAuctions, addNewAuction] = useState({});


    return (
        <>
        <h1>View Item</h1>
        <div className="item-display">
            <img src="">

            </img>
            <div className="description-field">
            <p>Item description</p>            
            </div>
        <div className="price-field">
            <h4>Item Price</h4>
            </div>
        </div>
        </>
    );
};

export default ViewItem;