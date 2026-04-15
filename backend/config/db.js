const mongoose = require("mongoose");

const connectDB = async () => {
  const maxRetries = 5;
  let retryCount = 0;

  const connectBody = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 5000,
      });
      console.log("MongoDB Connected");
    } catch (error) {
      retryCount++;
      console.error(`MongoDB connection attempt ${retryCount} failed: ${error.message}`);

      if (retryCount < maxRetries) {
        console.log(`Retrying in 5 seconds...`);
        await new Promise(resolve => setTimeout(resolve, 5000));
        return connectBody();
      } else {
        console.error("Max retries reached. Exiting...");
        process.exit(1);
      }
    }
  };

  await connectBody();
};

module.exports = connectDB;