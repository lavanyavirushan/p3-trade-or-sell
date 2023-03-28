const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/trade-sell",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;