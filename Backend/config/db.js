const mongoose = require("mongoose");

const db = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // bufferCommands: false, // Disable buffering
      connectTimeoutMS: 30000, // Set connection timeout to 30 seconds
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error(err));
};

module.exports = db;
