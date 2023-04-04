const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(
  "mongodb+srv://lavanyavirushan:VDaIzpnmp0ZlOeZp@cluster0.wiakdgj.mongodb.net/trade-sell?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;