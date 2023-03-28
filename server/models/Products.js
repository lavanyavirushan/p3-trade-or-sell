const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  price:{
    type: Number,
    required: true,
  },
  saleType: {
    type: String,
    required: true,
    default: "bid",
    enum: ['bid', 'buy-out']
  },
  saleEndTime: {
    type: Date,
    default: null
  },
  createdAt : { 
    type : Date, 
    default: Date.now 
  },
  deletedAt: {
    type: Date,
    default: null
  },
});

const Products = model('Products', productSchema);

module.exports = Products;