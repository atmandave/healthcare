const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 7000;

app.use(bodyParser.urlencoded({ extended: false }));

async function fetchData(username, password) {
  const url = "mongodb://127.0.0.1:27017/";
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("Connected to the database");

    const db = client.db("myapp");
    const collection = db.collection("d_data");
    const result = await collection.findOne({ "doc_data.name": username, "doc_data.password": password });
    return result;
  } catch (err) {
    console.error("An error occurred:", err);
  } finally {
    client.close();
    console.log("Connection closed");
  }
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.post('/login', async (req, res)=> {
  const username = req.body.username;
  const password = req.body.password;

  const result = await fetchData(username, password);

  if (result) {
    console.log("Login successful:", result.user_data);
    res.send('Login successful.');
  } else {
    console.log("Login failed: No matching data found.");
    res.send('Login failed. No matching data found.');
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});