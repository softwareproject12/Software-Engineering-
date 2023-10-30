require('dotenv').config(); // This line should be at the top of your code

function getWeather() {
    const locationInput = document.getElementById('locationInput');
    const weatherInfo = document.getElementById('weatherInfo');
    const location = locationInput.value;
    const apiKey = process.env.OPENWEATHERMAP_API_KEY; // Replace with your actual API key

    // Construct the API URL
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    // Make the API request
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;
            const conditions = data.weather[0].description;
            weatherInfo.textContent = `Weather in ${location}: ${temperature}°C, ${conditions}`;
        })
        .catch(error => {
            weatherInfo.textContent = `Could not fetch weather data for ${location}`;
        });
}
