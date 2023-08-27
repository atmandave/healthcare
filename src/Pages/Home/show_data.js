// FullStackApp.js

import React, { useState, useEffect } from 'react';
import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const port = 9000;

app.use(express.json());

// MongoDB connection setup
const url = 'mongodb://127.0.0.1:27017'; // MongoDB URL
const dbName = 'myapp'; // Replace with your database name
const collectionName = 'texts'; // Replace with your collection name

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
client.connect(err => {
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

  // React frontend code
  const frontend = `
    <html>
      <head>
        <title>React MongoDB App</title>
      </head>
      <body>
        <div id="root"></div>
        <script>
          // React code goes here
        </script>
      </body>
    </html>
  `;

  // Serve the React frontend
  app.get('/', (req, res) => {
    res.send(frontend);
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

// React frontend code
const frontendScript = `
  // React code to fetch and display data goes here
  // ...

  const fetchData = async () => {
    const response = await fetch('/api/fetchData');
    const data = await response.json();
    console.log(data); // Log the fetched data
  };

  fetchData(); // Call the fetchData function when the page loads
`;

// Include the frontendScript in the HTML
const fullFrontend = frontend.replace('// React code goes here', frontendScript);

console.log(fullFrontend);

// Close the MongoDB client when the application exits
process.on('SIGINT', () => {
  client.close();
  process.exit();
});
