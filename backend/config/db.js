const mongoose = require('mongoose');

// Global cache — persists across serverless warm invocations
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGO_URI).then((m) => m);
  }

  try {
    cached.conn = await cached.promise;
    console.log(`✅ MongoDB connected: ${cached.conn.connection.host}`);
  } catch (err) {
    cached.promise = null;
    console.error(`⚠️  MongoDB connection failed: ${err.message}`);
  }

  return cached.conn;
};

module.exports = connectDB;
