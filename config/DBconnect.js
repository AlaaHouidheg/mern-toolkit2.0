const mongoose = require("mongoose");

const DBconnect = async () => {
  try {
    const result = await mongoose.connect(process.env.DB_URI);
    console.log("database connected");
  } catch (error) {
    console.log(`databease is not connected ${error}`);
  }
};

module.exports = DBconnect;
