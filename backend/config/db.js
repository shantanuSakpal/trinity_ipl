const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Ipl_auction", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error(`Error while connecting to MongoDB: `, error.message);
  }
};

module.exports = connectToDB;