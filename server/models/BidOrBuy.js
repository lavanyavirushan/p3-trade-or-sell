const { Schema, model } = require('mongoose');

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
    default: Date.now
  }
});

const bidOrBuy = model('BidOrBuy', bidOrBuySchema);

module.exports = bidOrBuy;