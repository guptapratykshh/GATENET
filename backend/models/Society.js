const mongoose = require('mongoose');

const societySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  securityStaff: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  maintenanceStaff: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  geofence: {
    center: {
      latitude: {
        type: Number,
        min: -90,
        max: 90
      },
      longitude: {
        type: Number,
        min: -180,
        max: 180
      }
    },
    radius: {
      type: Number,
      min: 0
    }
  },
  amenities: [{
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: String,
    capacity: Number,
    openTime: String,
    closeTime: String,
    isActive: {
      type: Boolean,
      default: true
    }
  }],
  settings: {
    allowGuestBookings: { type: Boolean, default: false },
    requireApprovalForBookings: { type: Boolean, default: true },
    maintenanceResponseTime: { type: Number, default: 24 }, // in hours
    votingDuration: { type: Number, default: 48 } // in hours
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Society', societySchema); 