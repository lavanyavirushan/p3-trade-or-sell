const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://127.0.0.1:27017/trade-sell",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;