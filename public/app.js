document.getElementById('weatherForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    const response = await fetch(`/api/weather/current?city=${city}`);
    const data = await response.json();

    // Log data that check its structure
    console.log(data);

    /* Humidity: reported in percentage
       Pressure: reported in hPa
       Wind Speed: reported in m/s
       Visibility: reported in km
    */
    const resultsDiv = document.getElementById('weatherResults');
    if (data.weather) {
        resultsDiv.innerHTML = `
            <h2>Weather in ${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Pressure: ${data.main.pressure} hPa</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
            <p>Visibility: ${data.visibility / 1000} km</p>
            <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
            <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
        `;
    } else {
        resultsDiv.innerHTML = `<p>Error: ${data.message}</p>`;
    }
});