const db = require('../config/db');
const { Users } = require('../models');
const usersSeeds = require('./usersSeeds.json');

db.once('open', async () => {
  try {
    await Users.deleteMany({});
    await Users.create(usersSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
