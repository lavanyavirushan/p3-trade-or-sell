const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true
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

const Category = model('Category', categorySchema);

module.exports = Category;
