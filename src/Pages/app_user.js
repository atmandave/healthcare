const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const textSchema = new mongoose.Schema({
  content: String,
});

const TextModel = mongoose.model('Text', textSchema);

app.post('/api/save', async (req, res) => {
  try {
    const { content } = req.body;
    const newText = new TextModel({ content });
    await newText.save();
    res.status(201).json({ message: 'Text saved successfully' });
  } catch (error) {
    console.error('Error saving text:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});