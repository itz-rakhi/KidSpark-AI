require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// ── CORS ────────────────────────────────────────────────────────────────────
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
  'http://localhost:4173',
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    console.error('CORS blocked:', origin);
    callback(null, true); // temporarily allow all — remove after confirming
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));


app.use(express.json());

// ── DB ──────────────────────────────────────────────────────────────────────
connectDB();

// ── Routes ──────────────────────────────────────────────────────────────────
app.use('/api', require('./routes/enquiry'));

// Health check
app.get('/api/health', (req, res) => res.json({
  status: 'ok',
  timestamp: new Date(),
  frontend_url: process.env.FRONTEND_URL || 'NOT SET',
  mongo: process.env.MONGO_URI ? 'SET' : 'NOT SET',
}));

// 404
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, _next) => {
  console.error('Unhandled error:', err.stack);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

// ── Local dev server ─────────────────────────────────────────────────────────
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
}

// ── Vercel serverless export ─────────────────────────────────────────────────
module.exports = app;
