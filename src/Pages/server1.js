// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 9000;

app.use(bodyParser.json());

// MongoDB connection setup
const url = 'mongodb://127.0.0.1:27017'; // MongoDB URL
const dbName = 'myapp'; // Replace with your database name
const collectionName = 'texts'; // Replace with your collection name

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');

  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  // API endpoint to fetch data from MongoDB
  app.get('/api/fetchData', (req, res) => {
    collection.find({}).toArray((err, data) => {
      if (err) {
        console.error('Error fetching data from MongoDB:', err);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
      } else {
        res.status(200).json(data);
      }
    });
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

// Handle errors and clean up
process.on('SIGINT', () => {
  client.close();
  process.exit();
});
