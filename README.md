<div style="text-align: center; ">
    <h1>Simple Weather API Wrapper</h1>
</div>

<h2>Project Overview</h2>
    <p>The Simple Weather API Wrapper is a backend service that provides a simplified interface for retrieving weather data from the OpenWeatherMap API. This API wrapper allows users to get access to real-time weather information such as temperature, humidity, wind speed, and weather conditions by the city name that they would like to access that data.</p>

<h2>Features</h2>
    <ul>
        <li>Fetch weather data for any city using the OpenWeatherMap API.</li>
        <li>Simple and easy-to-use endpoints.</li>
        <li>JSON format responses.</li>
        <li>Secure management of API keys using environment variables.</li>
    </ul>

<h2>Technologies Used</h2>
    <ul>
        <li>Backend: Node.js, Express.js</li>
        <li>Programming Language: JavaScript (ES6+)</li>
        <li>Environment Management: dotenv</li>
        <li>Third-Party API: OpenWeatherMap API</li>
    </ul>

<h2>Project Architecture</h2>
    <ul>
        <li><code>server.js</code>: That is the main entry point of the application.</li>
        <li><code>routes/weather.js</code>: It defines the routes for fetching weather data.</li>
        <li><code>controllers/weatherController.js</code>: It handles the logic for interacting with the OpenWeatherMap API.</li>
        <li><code>config/</code>: Container for the configuration files, such as environment variables.</li>
        <li><code>public/</code>: Container for the css files for the designs.</li>
        <li><code>.env</code>: Environment variables file (not included in the repository).</li>
    </ul>

<h2>Setup Instructions</h2>
<h3>Prerequisites</h3>
    <ul>
        <li>Node.js installed on your machine.</li>
        <li>NPM (Node Package Manager).</li>
        <li>An API key from OpenWeatherMap:signup at OpenWeatherMap for your API key.</li>
    </ul>

<h3>Installation</h3>
    <pre>
git clone https://github.com/yourusername/simple-weather-api-wrapper.git
cd simple-weather-api-wrapper
npm install
touch .env
    </pre>
    Inside the .env file:
    <pre>
WEATHER_API_KEY=your_openweathermap_api_key
    </pre>
    Start the server:
    <pre>
node server.js
    </pre>

 <h2>Usage Guidelines</h2>
    To get weather data for a city, make a GET request to the /weather endpoint with the city name as a query parameter.

    <h3>Example:</h3>
    <pre>
curl -X GET "http://localhost:3000/weather?city=London"
    </pre>
    <h3>Response:</h3>
    <pre>
{
  "city": "London",
  "temperature": "15°C",
  "weather": "Cloudy",
  "humidity": "78%"
}
    </pre>

<h2>Testing the API</h2>
    <p>You can use tools like Postman or curl to test the API endpoints. Simply replace the city parameter in the URL to get the weather data for different locations.</p>

 <h2>Contributing</h2>
    <p>If you wish to contribute to this project, feel free to fork the repository and submit a pull request. All contributions are welcome!</p>
    <h2>Contributors</h2
    <p>ERNEST KYERE: For questions or inquiries, please contact Ernest Kyere at rnstkr@gmail.com</p>

<h2>License</h2>
    <p>This project is licensed under the MIT License.</p>
