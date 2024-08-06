const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const requestIp = require('request-ip');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(requestIp.mw());

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

// Endpoint to get tracking status
app.get('/track-logins', async (req, res) => {
  try {
    const userId = req.query.userId;
    let trackings;
    if (userId) {
      trackings = await Tracking.find({ userId });
    } else {
      trackings = await Tracking.find();
    }
    res.status(200).json(trackings);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Endpoint to update approval status
app.put('/track-logins/:id', async (req, res) => {
  const { id } = req.params;
  const { approve } = req.body;

  try {
    const tracking = await Tracking.findById(id);
    if (!tracking) {
      return res.status(404).send('Tracking not found');
    }

    tracking.approve = approve;
    await tracking.save();

    res.status(200).send('Tracking status updated');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// API endpoint for login
app.post('/login', async (req, res) => {
  const { email, password, latitude, longitude } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).send('Invalid credentials');
    }

    let clientIp = req.clientIp;
    if (clientIp === '::1') {
      clientIp = '127.0.0.1';
    }

    const trackingData = {
      userId: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      geoRange: user.geoRange,
      ip: clientIp,
      location: {
        latitude: latitude,
        longitude: longitude,
      },
      approve: false,
    };

    const existingTracking = await Tracking.findOne({ userId: user._id });

    if (existingTracking) {
      existingTracking.set(trackingData);
      await existingTracking.save();
    } else {
      const newTracking = new Tracking(trackingData);
      await newTracking.save();
    }

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
