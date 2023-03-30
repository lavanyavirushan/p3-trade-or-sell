import React, { useState, useEffect } from 'react';

const BuyScreen = () => {
    const [openAuctions, addNewAuction] = useState({});


    return (
        <>
        <h1>Buy screen</h1>
        <div className="item-display">
            <img src="">

            </img>
            <div className="item-info">
                <p className="item-description">
                    Item description here        
                </p>
                <h4 className="item-price">
                    Item Price here
                </h4>
                <input type="submit" className="make-offer" value="Buy!"/>
                
            </div>
        </div>
        </>
    );
};

export default BuyScreen;