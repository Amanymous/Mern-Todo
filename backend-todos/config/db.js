const mongoose = require("mongoose")

// database connection from mongodb atlas
// MONGO_URI is define in .env file

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit();
    }
  };
  
module.exports = connectDB;
  