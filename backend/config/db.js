const mongoose = require('mongoose');

/**
 * Connects to MongoDB. Server starts regardless of outcome.
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`⚠️  MongoDB connection failed: ${err.message}`);
    console.log('   Server will run without database — submissions will not be persisted.');
  }
};

module.exports = connectDB;
