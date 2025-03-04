async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'd7a9d535dad7096d7750dc3657997cee'; // my API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    const result = document.getElementById('result');
    if (data.cod === 200) {
        result.innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } else {
        result.innerHTML = `<p>${data.message}</p>`;
    }
}

function handleKeyDown(event) {
    if (event.key == 'Enter') {
        getWeather();
    }
}
