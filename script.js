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
const memeOutputContainer = document.getElementById('meme-output');
const memeApi = document.getElementById('meme-api');


async function getDogImage() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    dogOutputContainer.innerHTML = `<img src="${data.message}" alt="Random Dog Image" style="max-width: 100%; height: auto;">`;
}

async function getCatImage() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    catOutputContainer.innerHTML = `<img src="${data[0].url}" alt="Random Cat Image" style="max-width: 100%; height: auto;">`;
}

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

async function getExchangeRates() {
    const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
    const data = await response.json();
    currencyOutputContainer.innerHTML = `
        <p>1 USD = ${data.rates.EUR} EUR</p>
        <p>1 USD = ${data.rates.GBP} GBP</p>
    `;
}

async function getMovies() {
    const response = await fetch("")
}

async function getGitHubUser() {
    const response = await fetch("https://api.github.com/users/coding-cryptid");
    const data = await response.json();
    githubOutputContainer.innerHTML = `
        <p>Username: ${data.login}</p>
        <p>Name: ${data.name}</p>
        <p>Public Repos: ${data.public_repos}</p>
        <img src="${data.avatar_url}" alt="GitHub Avatar" style="max-width: 100px; height: auto;">
    `;

}

async function getJoke() {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    jokeOutputContainer.innerHTML = `
        <p>${data.setup}</p>
        <p>${data.punchline}</p>
    `;
}

async function getMeme() {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const data = await response.json();
    memeOutputContainer.innerHTML = `
        <img src="${data.data.memes[0].url}" alt="Random Meme" style="max-width: 100%; height: auto;">
    `;
}