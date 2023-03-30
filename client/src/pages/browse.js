import React, { useState, useEffect } from 'react';

const Browse = () => {
    const [openAuctions, addNewAuction] = useState({});


    return (
        <>
        <div className="item-display">
        <h1>Current open auctions</h1>
        <li>Cards for each item</li>
        </div>
        </>
    );
};

export default Browse;