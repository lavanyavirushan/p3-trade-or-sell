setTimeout(bidTimeout(), biddingTime)
//bidTimeout = function to be run when timer runs out
//biddingTime = how long the timer wil run in milliseconds, beginning when function is called (can be replaced with static number i3 3000 = 3 seconds)

function bidTimeout()  {
    //Code to handle what happens when the bidding period ends
};

function stopBidTimer() {
    //Stop the bidding timer
    clearTimeout(bidTimeout);
}