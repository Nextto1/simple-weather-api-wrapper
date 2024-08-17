const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

// Route to get current weather status
router.get('/current', weatherController.getCurrentWeather);

// Route to get weather forecast status
router.get('/forecast', weatherController.getWeatherForecast);

module.exports = router;