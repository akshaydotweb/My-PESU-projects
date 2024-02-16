const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/my_database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Model
const FormData = mongoose.model('FormData', {
  name: String,
  email: String,
  message: String
});

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Use cors middleware to allow requests from all origins

// Routes
app.post('/api/formdata', async (req, res) => {
  const { name, email, message } = req.body;
  const formData = new FormData({ name, email, message });
  try {
    await formData.save();
    res.status(201).send('Form data saved successfully');
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(PORT, () => console.log("Server running on port"));