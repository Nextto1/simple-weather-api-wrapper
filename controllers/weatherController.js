const axios = require('axios');
const apiBaseURL = "http://api.openweathermap.org/data/2.5";
const apiKey = process.env.API_KEY; // Loading the API key from environment variables

// Fetching  data for the recent weather
exports.getCurrentWeather = async (req, res) => {
  const { city } = req.query;
  try {
    const response = await axios.get(`${apiBaseURL}/weather`, {
      params: {
        q: city,
        appid: apiKey, // API key in the request is included
        units: 'metric'
      }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Fetching data for the weather forecast
exports.getWeatherForecast = async (req, res) => {
  const { city } = req.query;
  try {
    const response = await axios.get(`${apiBaseURL}/forecast`, {
      params: {
        q: city,
        appid: apiKey, // API key in the request is included
        units: 'metric'
      }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};