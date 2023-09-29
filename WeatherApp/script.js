const apiKey = "41e824aea5593f52693ccfea198566d5"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + '&appid=${apiKey}')
    var data = await response.json()

    document.querySelector('.weather').style.display = "flex"

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "c";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./public/clouds.png"
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./public/rain.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./public/drizzle.png"
    }else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "./public/drizzle.png"
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})