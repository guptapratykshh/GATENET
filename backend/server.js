const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const errorHandler = require('./middleware/error');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '.env') });

// Set default environment variables for testing
if (!process.env.JWT_SECRET) {
  process.env.JWT_SECRET = 'your_jwt_secret_key_here';
}

// Debug environment variables
console.log('Environment variables:');
console.log('PORT:', process.env.PORT);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('CLIENT_URL:', process.env.CLIENT_URL);
console.log('JWT_SECRET:', process.env.JWT_SECRET);

// Initialize Express app
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection with retry logic
const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: true,
      w: 'majority'
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    // Retry connection after 5 seconds
    setTimeout(connectDB, 5000);
  }
};

// Hardcoded MongoDB URI for testing
if (!process.env.MONGODB_URI) {
  process.env.MONGODB_URI = 'mongodb+srv://pg9999:Pg9026228280@cluster0.2zmnt.mongodb.net/gatednet';
}

connectDB();

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('New client connected');
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/polls', require('./routes/polls'));
app.use('/api/maintenance', require('./routes/maintenance'));
app.use('/api/amenities', require('./routes/amenities'));
app.use('/api/notifications', require('./routes/notifications'));
app.use('/api/geofencing', require('./routes/geofencing'));

// Error handling middleware
app.use(errorHandler);

// Start server with port fallback
const startServer = async (port) => {
  try {
    await new Promise((resolve, reject) => {
      server.listen(port, () => {
        console.log(`Server running on port ${port}`);
        resolve();
      }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
          console.log(`Port ${port} is busy, trying ${port + 1}`);
          reject(err);
        } else {
          console.error('Server error:', err);
          reject(err);
        }
      });
    });
  } catch (err) {
    if (err.code === 'EADDRINUSE') {
      startServer(port + 1);
    }
  }
};

const PORT = process.env.PORT || 5000;
startServer(PORT); 