// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors()); // allow frontend to access this server

app.post('/api/voice', async (req, res) => {
  const { text, model } = req.body;
  try {
    const response = await axios.get('https://api.agatz.xyz/api/voiceover', {
      params: { text, model }
    });
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 500, message: 'API error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
