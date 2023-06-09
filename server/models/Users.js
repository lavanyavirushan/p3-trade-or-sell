const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const moment = require('moment')

const usersSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
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
  type: {
    type: String,
    required: true,
    default: "user",
    enum: ['admin', 'user']
  }
});

// set up pre-save middleware to create password
usersSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
usersSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Users = model('Users', usersSchema);

module.exports = Users;
