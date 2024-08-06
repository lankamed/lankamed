const mongoose = require('mongoose');
const requestIp = require('request-ip');

// MongoDB connection
mongoose.connect('mongodb+srv://lankamed:e4vboSQC70jaA5LU@lankamed.bohwfjw.mongodb.net/?retryWrites=true&w=majority&appName=lankamed', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

// User schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  geoRange: String,
});

const User = mongoose.model('User', userSchema);

// Tracking schema and model
const trackingSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  role: String,
  geoRange: String,
  ip: String,
  location: {
    latitude: Number,
    longitude: Number,
  },
  approve: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now },
});

const Tracking = mongoose.model('Tracking', trackingSchema);

// Function to create dummy data
const createDummyData = async () => {
  try {
    // Dummy users
    const users = [
      { name: 'Rasika Ekanayaka', email: 'test1@gmail.com', password: '12345678', role: 'Admin', geoRange: 'Hospital' },
      { name: 'Kavin de surn', email: 'test2@gmail.com', password: '12345678', role: 'Doctor', geoRange: 'Local' },
      { name: 'jagath sumudu', email: 'test3@gmail.com', password: '12345678', role: 'Nurse', geoRange: 'International' },
      { name: 'dan Brown', email: 'test4@gmail.com', password: '12345678', role: 'OPD', geoRange: 'Hospital' },
      { name: 'sadevi madavee', email: 'test5@gmail.com', password: '12345678', role: 'Tracking Manager', geoRange: 'Local' },
    ];

    for (const user of users) {
      const newUser = new User(user);
      await newUser.save();

      // Dummy tracking data
      const trackingData = {
        userId: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        geoRange: newUser.geoRange,
        ip: '127.0.0.1',
        location: {
          latitude: 7.8731,
          longitude: 80.7718,
        },
        approve: true,
      };

      const newTracking = new Tracking(trackingData);
      await newTracking.save();
    }

    console.log('Dummy data created successfully');
  } catch (error) {
    console.error('Error creating dummy data', error);
  } finally {
    mongoose.connection.close();
  }
};

createDummyData();
