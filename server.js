const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

const API_BASE_URL = 'https://superheroapi.com/api/3b1f895a25597e0d8a0306f843a1e830';

// Search endpoint for heroes by name
app.get('/search/:name', async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search/${req.params.name}`);
    const data = response.data.results || [];

    // Log the response data
    console.log(`Fetched results for ${req.params.name}:`, data);

    if (!data.length) {
      console.log('No heroes found');
    }

    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
