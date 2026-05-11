const dogOutputContainer = document.getElementById('dog-output');
const dogApi = document.getElementById('dog-api');
const catOutputContainer = document.getElementById('cat-output');
const catApi = document.getElementById('cat-api');
const weatherOutputContainer = document.getElementById('weather-output');
const weatherApi = document.getElementById('weather-api');
const currencyOutputContainer = document.getElementById('currency-output');
const currencyApi = document.getElementById('currency-api');
const moviesOutputContainer = document.getElementById('movies-output');
const moviesApi = document.getElementById('movies-api');
const githubOutputContainer = document.getElementById('github-output');
const githubApi = document.getElementById('github-api');
const jokeOutputContainer = document.getElementById('joke-output');
const jokeApi = document.getElementById('joke-api');
const publicApiOutputContainer = document.getElementById('publicapi-output');
const publicApi = document.getElementById('public-api');

async function getWeather() {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m");
    const data = await response.json();
    weatherOutputContainer.innerHTML = `
        <p>Time: ${data.current.time}</p>
        <p>Temperature: ${data.current.temperature_2m}°C</p>
        <p>Wind Speed: ${data.current.wind_speed_10m} km/h</p>
        <p>Humidity: ${data.current.relative_humidity_2m}%</p>
    `;
}