

const BidScreen = () => {
    

    return (
        <> 
        <h1>Bidding Screen</h1>
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
                <input type="text" className="offer-value"/>
                <label for="offer-value">How much will you offer?</label>
                <input type="submit" className="make-offer" value="Make Offer!"/>
                
            </div>
        </div>
        </>
    );
};

export default BidScreen;