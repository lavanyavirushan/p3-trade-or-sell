const { Schema, model } = require('mongoose');
const moment = require('moment')

const bidOrBuySchema = new Schema({
  productId:{
    type: Schema.Types.ObjectId,
    ref: 'Products',
    required: true
  },
  price:{
    type: Number,
    required: true,
  },
  offerBy: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  offerByTime: {
    type: Date,
    default: Date.now,
    get: offerByTimeVal => moment(offerByTimeVal).format("MMM DD, YYYY [at] hh:mm a"),
  }
});

const bidOrBuy = model('BidOrBuy', bidOrBuySchema);

module.exports = bidOrBuy;