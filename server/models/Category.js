const { Schema, model } = require('mongoose');
const moment = require('moment')

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
    default: Date.now,
    get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"), 
  },
  deletedAt: {
    type: Date,
    default: null,
    get: deletedAtVal => moment(deletedAtVal).format("MMM DD, YYYY [at] hh:mm a"), 
  },
});

const Category = model('Category', categorySchema);

module.exports = Category;
